import { GoogleGenAI, Type } from "@google/genai";
import type { PeriodData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "Một bản tóm tắt ngắn gọn về thời kỳ lịch sử này, khoảng 150 từ.",
    },
    events: {
      type: Type.ARRAY,
      description: "Danh sách 3-5 sự kiện lịch sử quan trọng trong thời kỳ này, theo đúng thứ tự thời gian.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Tên của sự kiện." },
          date: { type: Type.STRING, description: "Ngày/tháng/năm hoặc khoảng thời gian diễn ra sự kiện." },
          description: { type: Type.STRING, description: "Mô tả chi tiết về sự kiện." },
          imagePrompt: { type: Type.STRING, description: "Một câu lệnh (bằng tiếng Anh) để tạo ảnh minh họa cho sự kiện. Ví dụ: 'A dramatic painting of the Battle of Bach Dang River, Vietnamese naval forces ambush Mongol fleet with wooden stakes hidden in the water'." },
          location: {
            type: Type.OBJECT,
            description: "Tọa độ địa lý (tùy chọn) của sự kiện trên bản đồ, với lat và lng từ 0 đến 100.",
            properties: {
                name: { type: Type.STRING, description: "Tên địa điểm." },
                lat: { type: Type.NUMBER, description: "Vĩ độ (từ 0 đến 100)." },
                lng: { type: Type.NUMBER, description: "Kinh độ (từ 0 đến 100)." },
            }
          }
        },
        required: ["name", "date", "description", "imagePrompt"],
      },
    },
    figures: {
      type: Type.ARRAY,
      description: "Danh sách 2-4 nhân vật lịch sử nổi bật trong thời kỳ này.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Tên của nhân vật lịch sử." },
          bio: { type: Type.STRING, description: "Tiểu sử ngắn gọn về nhân vật." },
          significance: { type: Type.STRING, description: "Tầm quan trọng hoặc đóng góp chính của họ." },
          imagePrompt: { type: Type.STRING, description: "Một câu lệnh (bằng tiếng Anh) để tạo ảnh chân dung của nhân vật. Ví dụ: 'A portrait of Emperor Quang Trung, determined expression, wearing royal armor, on a battlefield background'." },
        },
        required: ["name", "bio", "significance", "imagePrompt"],
      },
    },
    quiz: {
      type: Type.ARRAY,
      description: "Danh sách 3 câu hỏi trắc nghiệm về thời kỳ này.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING, description: "Câu hỏi trắc nghiệm." },
          options: {
            type: Type.OBJECT,
            properties: {
              A: { type: Type.STRING },
              B: { type: Type.STRING },
              C: { type: Type.STRING },
              D: { type: Type.STRING },
            },
            required: ["A", "B", "C", "D"],
          },
          correctAnswer: {
            type: Type.STRING,
            description: "Chữ cái của câu trả lời đúng (A, B, C, hoặc D).",
          },
        },
        required: ["question", "options", "correctAnswer"],
      },
    },
    jigsawPuzzle: {
        type: Type.OBJECT,
        description: "Thông tin cho trò chơi ghép tranh liên quan đến thời kỳ.",
        properties: {
            imagePrompt: { 
                type: Type.STRING, 
                description: "Một câu lệnh chi tiết, giàu hình ảnh (bằng tiếng Anh) để tạo ra một bức tranh nghệ thuật về thời kỳ này. Ví dụ: 'An epic historical painting of the Trung Sisters riding war elephants leading an army against Han invaders, dramatic sky, traditional Vietnamese armor, style of a dynamic oil painting.'" 
            },
            relatedFact: { 
                type: Type.STRING, 
                description: "Một sự thật ngắn gọn, thú vị liên quan đến hình ảnh được mô tả." 
            }
        },
        required: ["imagePrompt", "relatedFact"]
    },
    mapData: {
        type: Type.OBJECT,
        description: "Dữ liệu cho bản đồ chiến lược của thời kỳ.",
        properties: {
            imagePrompt: {
                type: Type.STRING,
                description: "Một câu lệnh (bằng tiếng Anh) để tạo một bản đồ cổ, mang tính nghệ thuật của khu vực liên quan. Ví dụ: 'An ancient, weathered map of Dai Viet during the Tran Dynasty, showing key rivers and citadels, parchment texture, calligraphic labels'."
            },
            locations: {
                type: Type.ARRAY,
                description: "Danh sách các địa điểm quan trọng trên bản đồ.",
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING, description: "Tên địa điểm (ví dụ: Kinh thành Thăng Long, Sông Bạch Đằng)." },
                        description: { type: Type.STRING, description: "Mô tả ngắn gọn về tầm quan trọng của địa điểm." },
                        lat: { type: Type.NUMBER, description: "Vĩ độ (tọa độ Y, từ 0 đến 100) để định vị trên bản đồ." },
                        lng: { type: Type.NUMBER, description: "Kinh độ (tọa độ X, từ 0 đến 100) để định vị trên bản đồ." },
                    },
                    required: ["name", "description", "lat", "lng"]
                }
            }
        },
        required: ["imagePrompt", "locations"]
    }
  },
  required: ["summary", "events", "figures", "quiz", "jigsawPuzzle", "mapData"],
};


export const fetchHistoricalData = async (periodName: string): Promise<PeriodData> => {
  try {
    const prompt = `Đối với thời kỳ '${periodName}' trong lịch sử Việt Nam, vui lòng tạo dữ liệu theo định dạng JSON đã cho. Cung cấp thông tin chính xác, súc tích và phù hợp cho mục đích giáo dục.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema,
        },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);

    if (!parsedData.summary || !parsedData.events || !parsedData.figures || !parsedData.quiz || !parsedData.jigsawPuzzle || !parsedData.mapData) {
      throw new Error("Dữ liệu nhận được không đầy đủ.");
    }

    return parsedData as PeriodData;
  } catch (error) {
    console.error("Lỗi khi gọi Gemini API:", error);
    throw new Error("Không thể lấy dữ liệu lịch sử từ API.");
  }
};

/**
 * Get cached image from Cloudinary or generate new one via serverless function
 * This replaces the old localStorage caching approach
 */
export const getCachedOrGenerateImage = async (cacheKey: string, prompt: string): Promise<string> => {
    try {
        // Call serverless function to handle image generation and caching
        const response = await fetch('/api/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cacheKey, prompt })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.details || 'Failed to fetch image');
        }

        const data = await response.json();
        
        // Log whether image was cached or newly generated
        if (data.cached) {
            console.log(`✓ Loaded cached image: ${cacheKey}`);
        } else {
            console.log(`✓ Generated new image: ${cacheKey}`);
        }

        return data.url;
    } catch (error) {
        console.error("Lỗi khi tạo/lấy ảnh:", error);
        throw new Error("Không thể tạo ảnh từ API.");
    }
};
