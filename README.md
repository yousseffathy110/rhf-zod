# RHF + Zod Form Validation

A modern Next.js registration form demonstrating advanced form validation using React Hook Form (RHF) with Zod schema validation. Features real-time password strength indicators, comprehensive validation rules, and a beautiful UI built with shadcn/ui and Tailwind CSS.

## ✨ What This Project Does

This project showcases a production-ready registration form with:

- **4-field registration form**: Username, Email, Password, and Confirm Password
- **Real-time password validation**: Live feedback with visual indicators (checkmarks/crosses) as you type
- **Advanced password requirements**:
  - Minimum 12 characters, maximum 25 characters
  - Must contain uppercase letters, lowercase letters, numbers, and special characters
- **Email validation**: Proper email format checking
- **Password confirmation**: Ensures both password fields match
- **Async form submission**: Simulated API call with loading states
- **Responsive design**: Works on mobile and desktop

## 📦 Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- **UI Library**: React 19.2.3
- **Form Management**: [React Hook Form 7.69.0](https://react-hook-form.com/)
- **Schema Validation**: [Zod 4.2.1](https://zod.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5

## 🛠️ Installation

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

To install Bun (if not already installed):

```bash
curl -fsSL https://bun.sh/install | bash
```

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd rhf-zod
```

2. Install dependencies using Bun:

```bash
bun install
```

## 🚀 Running the Project

### Development Mode

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files.

## 📂 Project Structure

```
rhf-zod/
├── app/
│   ├── zod/
│   │   ├── schema/
│   │   │   └── formSchema.ts        # Zod validation schema with password rules
│   │   ├── page.tsx                 # Registration form with Zod validation
│   │   └── ValidationTemplate.tsx   # Password strength indicator component
│   ├── globals.css                  # Global Tailwind styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page with RHF native validation
├── components/
│   └── ui/                          # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts                     # Utility functions (cn helper)
└── config files                     # TypeScript, ESLint, Next.js, Tailwind
```

## 🎨 Key Features Implemented

### 1. Zod Schema Validation

The form uses a comprehensive Zod schema for validation:

```typescript
const formSchema = z
  .object({
    username: z.string().min(1).max(20),
    email: z.string().email(),
    password: z
      .string()
      .min(12)
      .max(25)
      .refine((val) => /[A-Z]/.test(val), "Must include uppercase")
      .refine((val) => /[a-z]/.test(val), "Must include lowercase")
      .refine((val) => /[0-9]/.test(val), "Must include number")
      .refine((val) => /[^A-Za-z0-9]/.test(val), "Must include special char"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
```

### 2. Real-Time Password Strength Indicator

- Visual feedback with checkmarks (✅) and crosses (❌)
- Shows 6 password requirements in real-time:
  - At least 12 characters
  - At most 25 characters
  - Contains uppercase letter
  - Contains lowercase letter
  - Contains number
  - Contains special character

### 3. Form State Management

- Loading states during submission
- Disabled inputs while submitting
- Form reset after successful submission
- Error messages for each field
- Accessibility with `aria-invalid` attributes

## 📚 Learn More

### Documentation

- [React Hook Form](https://react-hook-form.com/) - Complete form management guide
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Next.js](https://nextjs.org/docs) - Next.js features and API
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Bun](https://bun.sh/docs) - Fast JavaScript runtime

### Resources

- [Next.js App Router](https://nextjs.org/docs/app) - Modern routing in Next.js
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
