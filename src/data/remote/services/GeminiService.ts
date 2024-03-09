import {GeminiResponseDto} from '../dto/GeminiResponseDto';

interface GeminiService {
  generateContent(content: string, apiKey: string): Promise<GeminiResponseDto>;
  //   generateContentWithImage(
  //     content: string,
  //     images: Blob[],
  //   ): Promise<GeminiResponseDto>;
}

export default GeminiService;
