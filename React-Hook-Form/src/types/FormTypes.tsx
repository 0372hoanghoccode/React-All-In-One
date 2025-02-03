// Định nghĩa kiểu dữ liệu cho form
export interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // Với react-select, sử dụng kiểu object hoặc null
  gender: { value: string; label: string } | null;
  terms: boolean;
}
