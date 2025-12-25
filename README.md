# RHF + Zod Form Validation

A modern Next.js project demonstrating form validation using React Hook Form (RHF) with native validation rules, styled with shadcn/ui components and Tailwind CSS.

## 🚀 Features

- **React Hook Form**: Performant, flexible forms with built-in validation rules
- **Native Validation**: Form validation using React Hook Form's built-in validators (required, minLength, maxLength, validate)
- **shadcn/ui Components**: Beautiful, accessible, and customizable UI components
- **Next.js 16**: Latest Next.js with App Router
- **TypeScript**: Full type safety across the application
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development
- **Bun Runtime**: Fast JavaScript runtime and package manager

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1
- **Runtime**: Bun
- **UI Library**: React 19.2.3
- **Form Management**: React Hook Form 7.69.0
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5

## 📂 Project Structure

```
rhf-zod/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind CSS v4
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Registration form with React Hook Form validation
├── components/            # React components
│   ├── forms/            # Custom form components
│   │   └── InputGroup.tsx # Reusable input group component (legacy)
│   └── ui/               # shadcn/ui base components
│       ├── button.tsx    # Button component with variants
│       ├── input.tsx     # Input component with focus and validation states
│       └── label.tsx     # Label component
├── lib/                  # Utility functions
│   └── utils.ts         # Helper utilities (cn function for class merging)
├── public/              # Static assets
└── config files         # TypeScript, ESLint, Next.js, Tailwind configs
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- Node.js 20+ (alternative to Bun)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rhf-zod
```

2. Install dependencies:

```bash
bun install
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files.

### Build

Build the application for production:

```bash
bun run build
```

### Start Production Server

Run the production build:

```bash
bun start
```

### Linting

Run ESLint to check for code quality issues:

```bash
bun run lint
```

## 🎨 Components

### Registration Form

The main form implements a complete registration flow with validation:

**Features:**

- Username field with required and max length (20 chars) validation
- Password field with min length (6 chars) and max length (20 chars) validation
- Confirm password field with match validation
- Real-time error display below each field
- Submit button with loading state
- Form reset after successful submission
- Accessibility features with `aria-invalid` attributes
- Disabled state during form submission

**Validation Rules:**

- **Username**: Required, max 20 characters
- **Password**: Required, min 6 characters, max 20 characters
- **Confirm Password**: Required, must match password

### UI Components

The project uses shadcn/ui components built on Radix UI primitives:

- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes with loading state support
- **Input**: Styled text input with focus states, validation styling, and disabled state
- **Label**: Accessible label component with proper associations

## 📝 Form Validation Implementation

This project demonstrates React Hook Form with native validation rules:

### Form Setup

The form uses TypeScript interfaces for type safety:

```typescript
type InputForm = {
  username: string;
  password: string;
  confirmPassword: string;
};
```

### Validation Patterns

**1. Required Field Validation:**

```typescript
{...register("username", {
  required: "Username is required"
})}
```

**2. Length Validation:**

```typescript
{...register("username", {
  required: "Username is required",
  maxLength: {
    value: 20,
    message: "Username cannot exceed 20 characters"
  }
})}
```

**3. Custom Validation (Password Match):**

```typescript
{...register("confirmPassword", {
  required: "Confirm password is required",
  validate: (value) =>
    value === getValues("password") || "Passwords do not match"
})}
```

### Error Handling

Errors are displayed conditionally below each field:

```typescript
{
  errors.username && (
    <p className="text-destructive text-sm capitalize">
      {errors.username.message}
    </p>
  );
}
```

### Form Submission

The form includes async submission handling with loading state:

```typescript
const onSubmit = async (data: InputForm) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log(data);
  reset();
};
```

## 🎯 Key Implementation Details

### React Hook Form Features Used

1. **useForm Hook**: Managing form state, validation, and submission
2. **register**: Connecting inputs to form state with validation rules
3. **handleSubmit**: Handling form submission with validation
4. **formState**: Accessing errors and submission state
5. **getValues**: Retrieving field values for custom validation
6. **reset**: Clearing form after successful submission

### Validation Features

- **Required fields**: All fields are mandatory
- **Length constraints**: Username max 20 chars, password 6-20 chars
- **Pattern matching**: Confirm password must match password
- **Real-time feedback**: Errors display immediately after field interaction
- **Accessibility**: ARIA attributes for screen readers

### UX Enhancements

- Loading state during submission ("Submitting..." text)
- Disabled inputs during submission to prevent duplicate requests
- Form reset after successful submission
- Error messages styled with Tailwind CSS
- Responsive design with minimum width constraints

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Form Validation Resources

- [React Hook Form Documentation](https://react-hook-form.com/) - Complete guide to React Hook Form
- [Zod Documentation](https://zod.dev/) - TypeScript-first schema validation

### UI Component Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library documentation
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository into Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Alternative Deployment Options

- **Docker**: Containerize the application
- **Netlify**: Alternative hosting platform
- **Self-hosted**: Use `bun start` after building

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
