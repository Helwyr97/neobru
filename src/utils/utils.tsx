import {
  FileAudio,
  FileImage,
  FileJson,
  FileQuestionMark,
  FileText,
  FileVideo,
} from "lucide-react";
import { JSX } from "react";

export type SimpleMimeType =
  | "image"
  | "text"
  | "audio"
  | "video"
  | "json"
  | "file";

export type MimeIcons = {
  [key in SimpleMimeType]: JSX.Element;
};

export const simplifyMimeType = (mime: string): SimpleMimeType => {
  if (mime.startsWith("image")) return "image";
  if (mime.startsWith("text")) return "text";
  if (mime.startsWith("audio")) return "audio";
  if (mime.startsWith("video")) return "video";
  if (mime.startsWith("application/json")) return "json";

  return "file";
};

export const mimeIcons: MimeIcons = {
  image: <FileImage />,
  text: <FileText />,
  audio: <FileAudio />,
  video: <FileVideo />,
  json: <FileJson />,
  file: <FileQuestionMark />,
};

export const getSimpleMimeIcon = (mime: SimpleMimeType): JSX.Element =>
  mimeIcons[mime];
