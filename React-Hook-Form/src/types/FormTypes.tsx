import { z } from "zod";

// Định nghĩa schema sử dụng Zod
export const formSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  //nếu react-select dùng object hoặc null; nếu chọn, bắt buộc có value và label
  gender: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, { message: "Please select a gender" }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

// Infer ra kiểu dữ liệu từ schema
export type IFormInputs = z.infer<typeof formSchema>;
