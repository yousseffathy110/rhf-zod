import * as z from "zod";

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(20, "Username cannot exceed 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(12, "Password must be at least 12 characters")
      .max(25, "Password cannot exceed 25 characters")
      .refine((val) => /[A-Z]/.test(val), {
        message: "Must include an uppercase letter",
        params: { rule: "uppercase" },
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Must include a lowercase letter",
        params: { rule: "lowercase" },
      })
      .refine((val) => /[0-9]/.test(val), {
        message: "Must include a number",
        params: { rule: "number" },
      })
      .refine((val) => /[^A-Za-z0-9]/.test(val), {
        message: "Must include a special character",
        params: { rule: "special" },
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const passwordRules = [
  {
    key: "minLength",
    label: "At least 12 characters",
    test: (val: string) => val.length >= 12,
  },
  {
    key: "maxLength",
    label: "At most 25 characters",
    test: (val: string) => val.length <= 25,
  },
  {
    key: "uppercase",
    label: "Contains an uppercase letter",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    key: "lowercase",
    label: "Contains a lowercase letter",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    key: "number",
    label: "Contains a number",
    test: (val: string) => /[0-9]/.test(val),
  },
  {
    key: "special",
    label: "Contains a special character",
    test: (val: string) => /[^A-Za-z0-9]/.test(val),
  },
];

type FormSchemaType = z.infer<typeof formSchema>;

export { formSchema, type FormSchemaType, passwordRules };
