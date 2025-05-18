import axios from 'axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AiService {
    async askOpenRouter(prompt: string): Promise<string> {
        // API key và model chính
        const apiKey1 = "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";
        const model1 = "deepseek/deepseek-prover-v2:free";
        // API key và model dự phòng 1
        const apiKey2 = "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";
        const model2 = "deepseek/deepseek-v3-base:free";
        // API key và model dự phòng 2
        const apiKey3 = "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";
        const model3 = "deepseek/deepseek-r1-zero:free";
        // API key và model dự phòng 3
        const apiKey4 = "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";
        const model4 = "deepseek/deepseek-r1-distill-llama-70b:free";
        const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

        // Hàm gọi API
        const callApi = async (apiKey: string, model: string) => {
            return axios.post(
                apiUrl,
                {
                    model,
                    messages: [
                        { role: 'system', content: 'Bạn chỉ cần dịch và giải thích tiếng Anh sang tiếng Việt.' },
                        { role: 'user', content: 'Dịch và giải thích sang tiếng việt nếu có lỗi ngữ pháp thì sửa:"' + prompt + '"' },
                    ]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    }
                }
            );
        };

        try {
            // Thử với API key và model chính
            const response = await callApi(apiKey1, model1);
            console.log('Phản hồi server đầy đủ:', response.data);
            const reply = response.data.choices?.[0]?.message?.content ?? 'Không có phản hồi nội dung';
            return reply;
        } catch (error: any) {
            // Nếu lỗi do API key hoặc lỗi 401/403, thử lại với API key/model dự phòng 1
            if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
                try {
                    const response2 = await callApi(apiKey2, model2);
                    console.log('Phản hồi server dự phòng 1:', response2.data);
                    const reply2 = response2.data.choices?.[0]?.message?.content ?? 'Không có phản hồi nội dung';
                    return reply2;
                } catch (error2) {
                    // Nếu tiếp tục lỗi, thử với API key/model dự phòng 2
                    if (axios.isAxiosError(error2) && (error2.response?.status === 401 || error2.response?.status === 403)) {
                        try {
                            const response3 = await callApi(apiKey3, model3);
                            console.log('Phản hồi server dự phòng 2:', response3.data);
                            const reply3 = response3.data.choices?.[0]?.message?.content ?? 'Không có phản hồi nội dung';
                            return reply3;
                        } catch (error3) {
                            // Nếu tiếp tục lỗi, thử với API key/model dự phòng 3
                            if (axios.isAxiosError(error3) && (error3.response?.status === 401 || error3.response?.status === 403)) {
                                try {
                                    const response4 = await callApi(apiKey4, model4);
                                    console.log('Phản hồi server dự phòng 3:', response4.data);
                                    const reply4 = response4.data.choices?.[0]?.message?.content ?? 'Không có phản hồi nội dung';
                                    return reply4;
                                } catch (error4) {
                                    console.error('Lỗi gọi OpenRouter với API key dự phòng 3:', error4);
                                    return 'Xin lỗi, tôi không thể trả lời lúc này.';
                                }
                            } else {
                                console.error('Lỗi gọi OpenRouter với API key dự phòng 2:', error3);
                                return 'Xin lỗi, tôi không thể trả lời lúc này.';
                            }
                        }
                    } else {
                        console.error('Lỗi gọi OpenRouter với API key dự phòng 1:', error2);
                        return 'Xin lỗi, tôi không thể trả lời lúc này.';
                    }
                }
            } else {
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
}
