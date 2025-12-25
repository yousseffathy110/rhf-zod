import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Link href="/rhf" className="mr-5">
        <Button size={"lg"}>RHF Only</Button>
      </Link>
      <Link href="/zod">
        <Button size={"lg"}>RHF + Zod</Button>
      </Link>
    </>
  );
}
