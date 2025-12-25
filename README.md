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

### Build for Production

Build the application:

```bash
bun run build
```

### Start Production Server

Run the production build:

```bash
bun start
```

### Linting

Check code quality:

```bash
bun run lint
```

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
