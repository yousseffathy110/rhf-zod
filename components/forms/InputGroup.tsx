import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type InputGroupProps = {
  type: "text" | "email" | "password";
  className?: string;
  label: string;
  id: string;
  labelClassName?: string;
  placeholder?: string;
  inputClassName?: string;
};

export function InputGroup({
  type = "text",
  className,
  label,
  id,
  labelClassName,
  placeholder,
  inputClassName,
}: InputGroupProps) {
  return (
    <div className={cn("flex flex-col gap-3 w-1/3 min-w-96 p-5", className)}>
      <Label
        htmlFor={id}
        className={cn("text-lg font-medium capitalize", labelClassName)}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn("text-xl font-medium", inputClassName)}
      />
    </div>
  );
}
