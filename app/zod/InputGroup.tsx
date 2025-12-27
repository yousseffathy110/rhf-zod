import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type InputGroupProps = {
  label: string;
  type: string;
  placeholder: string;
  isSubmitting: boolean;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
};

export default function InputGroup({
  label,
  type,
  placeholder,
  isSubmitting,
  error,
  register,
}: InputGroupProps) {
  return (
    <>
      <Label className="text-lg font-medium capitalize">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        className="text-xl font-medium"
        disabled={isSubmitting}
        aria-invalid={!!error}
        {...register}
      />
    </>
  );
}
