// data/models/RequestPart.ts
export interface RequestPart {
  text?: string;
  inlineData?: RequestInlineData;
}

// data/models/RequestInlineData.ts
export interface RequestInlineData {
  mimeType: string;
  data: string;
}

// Consider a separate interface for image data handling in the future:
// data/models/ImageData.ts
// export interface ImageData {
//   // Properties for image data (e.g., dataUrl, blob)
// }
