import { InputGroup } from "@/components/forms/InputGroup";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <form>
      <InputGroup label="user name" type="text" id="username" />
      <InputGroup label="Email Adress" type="email" id="email" />
      <InputGroup label="Password" type="password" id="password" />
      <Button size={"lg"} type="submit" className="self-start ml-5 rounded-sm min-w-32">
        Submit
      </Button>
    </form>
  );
}
