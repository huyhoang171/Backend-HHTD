import axios from 'axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AiService {
    async askOpenRouter(prompt: string): Promise<string> {
        const apiKey = "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";  // Thay bằng OpenRouter API key của bạn
        try {
          const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
              model: 'deepseek/deepseek-prover-v2:free',
              messages: [
                { role: 'system', content: 'Bạn chỉ cần dịch và giải thích tiếng Anh sang tiếng Việt.' },
                { role: 'user', content: 'Dịch và giải thích sang tiếng việt nếu có lỗi ngữ pháp thì sửa:"' + prompt + '"' },
              ]
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
                // Optional: để hiện tên app bạn trên OpenRouter leaderboard
                // 'HTTP-Referer': '<YOUR_SITE_URL>',
                // 'X-Title': '<YOUR_SITE_NAME>',
              }
            }
          );
      
          console.log('Phản hồi server đầy đủ:', response.data);
      
          const reply = response.data.choices?.[0]?.message?.content ?? 'Không có phản hồi nội dung';
          return reply;
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            console.error('Lỗi gọi OpenRouter:');
            console.error('Status:', error.response?.status);
            console.error('StatusText:', error.response?.statusText);
            console.error('Headers:', error.response?.headers);
            console.error('Data:', JSON.stringify(error.response?.data, null, 2));
          } else {
            console.error('Lỗi không xác định:', error);
          }
          return 'Xin lỗi, tôi không thể trả lời lúc này.';
        }
      }
}
