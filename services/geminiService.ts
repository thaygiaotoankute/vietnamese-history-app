import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

/**
 * Hàm hỏi đáp về lịch sử Việt Nam bằng Gemini API
 * @param question - Câu hỏi của người dùng
 * @param currentPeriod - Thời kỳ lịch sử hiện tại người dùng đang xem
 * @returns Câu trả lời từ AI
 */
export const askHistoryQuestion = async (question: string, currentPeriod: string): Promise<string> => {
  try {
    const systemPrompt = `Bạn là một chuyên gia lịch sử Việt Nam thân thiện và am hiểu sâu sắc. 
    
Nhiệm vụ của bạn:
- Trả lời các câu hỏi về lịch sử Việt Nam một cách chính xác, chi tiết và dễ hiểu
- Sử dụng giọng điệu thân thiện, gần gũi phù hợp với học sinh và người yêu thích lịch sử
- Khi có thể, liên hệ câu trả lời với thời kỳ hiện tại người dùng đang xem: "${currentPeriod}"
- Đưa ra những thông tin thú vị, ý nghĩa lịch sử sâu sắc
- Nếu câu hỏi không liên quan đến lịch sử Việt Nam, lịch sự nhắc nhở và gợi ý hỏi về lịch sử Việt Nam

Hãy trả lời ngắn gọn (khoảng 100-200 từ) nhưng đầy đủ ý nghĩa.`;

    const prompt = `${systemPrompt}\n\nCâu hỏi: ${question}\n\nTrả lời:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Lỗi khi gọi Gemini API cho chatbot:", error);
    throw new Error("Không thể xử lý câu hỏi. Vui lòng thử lại.");
  }
};

// NOTE: Các hàm tạo ảnh đã được loại bỏ vì bây giờ sử dụng ảnh cố định
// Bạn có thể thêm ảnh cố định vào folder public/images/ và import trực tiếp
