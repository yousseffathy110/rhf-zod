"use client";
import { Button } from "@/components/ui/button";
import InputGroup from "./InputGroup";
import ValidationFeedback from "./ValidationFeedback";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMsg from "./ErrorMsg";
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

  const InputValues = [
    {
      label: "user name",
      name: "username",
      type: "text",
      placeholder: "Enter your user name",
      error: errors.username,
      register: register("username"),
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
      error: errors.email,
      register: register("email"),
    },
    {
      label: "password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      error: errors.password,
      register: register("password"),
    },
    {
      label: "confirm password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      error: errors.confirmPassword,
      register: register("confirmPassword"),
    },
  ] as const;

  const onSubmit = async (data: FormSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log(data);
  };

  const passwordValue = useWatch({
    control,
    name: "password",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-md bg-gray-100 p-3 flex items-center flex-col m-5"
    >
      <h1 className="text-2xl font-medium">RHF + Zod</h1>

      {InputValues.map((input) => (
        <div key={input.label} className={formFieldStyles}>
          <InputGroup
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            isSubmitting={isSubmitting}
            error={input.error}
            register={input.register}
          />
          {input.name === "password" ? (
            <div className="flex flex-col gap-1.5 mt-1">
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
          ) : (
            <ErrorMsg message={input.error} />
          )}
        </div>
      ))}

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
