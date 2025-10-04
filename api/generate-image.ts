import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cacheKey, prompt } = req.body;

  if (!cacheKey || !prompt) {
    return res.status(400).json({ error: 'Missing cacheKey or prompt' });
  }

  try {
    console.log(`Checking cache for: ${cacheKey}`);
    
    // Step 1: Check if image exists in Cloudinary
    try {
      const existingImage = await cloudinary.api.resource(cacheKey, {
        resource_type: 'image'
      });
      
      console.log(`✓ Found cached image: ${cacheKey}`);
      return res.status(200).json({ 
        url: existingImage.secure_url, 
        cached: true 
      });
    } catch (cloudinaryError: any) {
      if (cloudinaryError.http_code !== 404) {
        // Only throw if error is NOT 404
        throw cloudinaryError;
      }
      // If 404, continue to generate new image
      console.log(`✗ Cache miss for: ${cacheKey}, generating new image...`);
    }

    // Step 2: Generate new image with Gemini
    console.log(`Generating image with Gemini...`);
    
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '1:1',
      },
    });

    const base64Image = response.generatedImages[0].image.imageBytes;
    console.log(`✓ Image generated successfully`);

    // Step 3: Upload to Cloudinary
    console.log(`Uploading to Cloudinary: ${cacheKey}`);
    
    const uploadResult = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${base64Image}`,
      {
        public_id: cacheKey,
        folder: 'vietnamese-history',
        overwrite: false,
        resource_type: 'image'
      }
    );

    console.log(`✓ Uploaded: ${uploadResult.secure_url}`);

    return res.status(200).json({ 
      url: uploadResult.secure_url, 
      cached: false 
    });

  } catch (error: any) {
    console.error('Error in generate-image function:', error);
    
    return res.status(500).json({ 
      error: 'Failed to generate or cache image',
      details: error.message 
    });
  }
}
