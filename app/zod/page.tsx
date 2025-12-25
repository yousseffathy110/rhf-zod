"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import ValidationFeedback from "./ValidationFeedback";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader } from "lucide-react";

import {
  formSchema,
  passwordRules,
  type FormSchemaType,
} from "./schema/formSchema";

const formFieldStyles =
  "flex flex-col gap-3 w-full max-sm:min-w-[320px] px-5 py-3 min-w-[400px]";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data.username, data.email);
    reset({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const passwordValue = useWatch({
    control,
    name: "password",
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-md bg-gray-100 p-3 flex items-center flex-col"
    >
      <h1 className="text-2xl font-medium">RHF + Zod</h1>

      <div className={formFieldStyles}>
        <Label className="text-lg font-medium capitalize">user name</Label>
        <Input
          type="text"
          placeholder="Enter your user name"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={!!errors.username}
          {...register("username")}
        />
        {errors?.username && (
          <p className="text-sm text-red-600 mt-1">
            {errors.username?.message}
          </p>
        )}
      </div>

      <div className={formFieldStyles}>
        <Label className="text-lg font-medium capitalize">Email Address</Label>
        <Input
          type="email"
          placeholder="Enter your email address"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email?.message}</p>
        )}
      </div>

      <div className={formFieldStyles}>
        <Label className="text-lg font-medium capitalize">password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={!!errors.password}
          {...register("password")}
        />
        <div className="flex flex-col gap-2 mt-1">
          {passwordValue &&
            passwordRules.map((rule) => {
              const passed = rule.test(passwordValue);
              return (
                <ValidationFeedback
                  key={rule.key}
                  errorMsg={rule.label}
                  passed={passed}
                />
              );
            })}
        </div>
      </div>

      <div className={formFieldStyles}>
        <Label className="text-lg font-medium capitalize">
          confirm password
        </Label>
        <Input
          type="password"
          placeholder="Confirm your password"
          className="text-xl font-medium"
          disabled={isSubmitting}
          aria-invalid={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 mt-1">
            {errors.confirmPassword?.message}
          </p>
        )}
      </div>

      <Button
        size={"lg"}
        type="submit"
        disabled={isSubmitting}
        className="self-start ml-5 mt-2 rounded-sm min-w-44"
      >
        {isSubmitting ? <Loader className="animate-spin" /> : "Submit"}
      </Button>
    </form>
  );
}
