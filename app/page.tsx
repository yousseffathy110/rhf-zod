import { InputGroup } from "@/components/forms/InputGroup";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <form className="border rounded-md bg-gray-100 p-3">
      <InputGroup label="user name" type="text" id="username" />
      <InputGroup label="Email Adress" type="email" id="email" />
      <InputGroup label="Password" type="password" id="password" />
      <InputGroup
        label="confirm password"
        type="password"
        id="confirm-password"
      />
      <Button
        size={"lg"}
        type="submit"
        className="self-start ml-5 mt-2 rounded-sm min-w-44"
      >
        Submit
      </Button>
    </form>
  );
}
