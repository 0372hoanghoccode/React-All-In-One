// Các kiểu dữ liệu dùng lại trong toàn bộ dự án
export interface User {
  id: number;
  username: string;
  email: string;
}

export type Status = "loading" | "success" | "error";
