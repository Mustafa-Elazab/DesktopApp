import {GeminiResponseDto} from '../../data/remote/dto/GeminiResponseDto';
import GeminiService from '../../data/remote/services/GeminiService';
import API_CONFIG from '../../utils/Constant';

class GeminiServiceImp implements GeminiService {
  async generateContent(content: string): Promise<GeminiResponseDto> {
    const parts = [{text: content}];
    const requestBody = {contents: [{parts}]};
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}/v1beta/models/${API_CONFIG.GEMINI_PRO}:generateContent?key=${API_CONFIG.API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify(requestBody),
        },
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const responseText = await response.json();
      return responseText as GeminiResponseDto;
    } catch (error) {
      console.error('Error during API request:', error);
      throw error;
    }
  }

  //   async generateContentWithImage(
  //     content: string,
  //     images: Blob[],
  //   ): Promise<GeminiResponseDto> {
  //     // Convert Blobs to base64 strings for Gemini API compatibility
  //     const imageDataParts = await Promise.all(
  //       images.map(async image => {
  //         const reader = new FileReader();
  //         const promise = new Promise<RequestPart>((resolve, reject) => {
  //           reader.onload = event => {
  //             if (!event.target?.result) {
  //               reject(new Error('Failed to read image data'));
  //               return;
  //             }
  //             const base64Data = Buffer.from(
  //               event.target.result as ArrayBuffer,
  //             ).toString('base64');
  //             resolve({inlineData: {mimeType: image.type, data: base64Data}});
  //           };
  //           reader.onerror = reject;
  //           reader.readAsArrayBuffer(image);
  //         });
  //         return promise;
  //       }),
  //     );

  //     const parts = [{text: content}, ...imageDataParts];
  //     const requestBody = {contents: [{parts}]};

  //     try {
  //       const response = await fetch(
  //         `${API_CONFIG.BASE_URL}/v1beta/models/${API_CONFIG.GEMINI_PRO_VISION}:generateContent`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${API_CONFIG.API_KEY}`,
  //           },
  //           body: JSON.stringify(requestBody),
  //         },
  //       );
  //       if (!response.ok) {
  //         throw new Error(`API request failed with status: ${response.status}`);
  //       }

  //       const responseText = await response.json();
  //       return responseText as GeminiResponseDto;
  //     } catch (error) {
  //       console.error('Error during API request:', error);
  //       throw error;
  //     }
  //   }
}

export default GeminiServiceImp;
