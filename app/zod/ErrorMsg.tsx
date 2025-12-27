import { FieldError } from "react-hook-form";

export default function ErrorMsg({
  message,
}: {
  message: FieldError | undefined;
}) {
  return (
    <p className="text-sm text-red-600 mt-1 capitalize">{message?.message}</p>
  );
}
