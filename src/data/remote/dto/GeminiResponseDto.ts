export interface GeminiResponseDto {
  candidates: CandidateDto[];
}

export interface CandidateDto {
  content: ContentDto;
}

export interface ContentDto {
  parts: PartDto[];
  role: string;
}

export interface PartDto {
  text: string;
}

export interface Message {
  isSentByMe: boolean;
  content: string;
}
