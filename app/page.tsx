"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<InputForm>();

  const onSubmit = async (data: InputForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-md bg-gray-100 p-3 flex items-center flex-col"
    >
      <h1 className="text-2xl font-medium">RHF + Zod</h1>
      <div className="flex flex-col gap-3 w-1/3 min-w-96 p-5">
        <Label className="text-lg font-medium capitalize">user name</Label>
        <Input
          type="text"
          placeholder="Enter your user name"
          className="text-xl font-medium"
          disabled={isSubmitting}
          // you can type it like Boolean(errors.username) or (errors.username) ? true : false as well
          aria-invalid={!!errors.username}
          {...register("username", {
            required: "Username is required",
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters",
            },
          })}
        />
        {errors.username && (
          <p className="text-destructive text-sm capitalize">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 w-1/3 min-w-96 p-5">
        <Label className="text-lg font-medium capitalize">password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            maxLength: {
              value: 20,
              message: "Password cannot exceed 20 characters",
            },
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-destructive text-sm capitalize">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 w-1/3 min-w-96 p-5">
        <Label className="text-lg font-medium capitalize">
          confirm password
        </Label>
        <Input
          type="password"
          placeholder="Confirm your password"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-destructive text-sm capitalize">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button
        size={"lg"}
        type="submit"
        disabled={isSubmitting}
        className="self-start ml-5 mt-2 rounded-sm min-w-44"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
