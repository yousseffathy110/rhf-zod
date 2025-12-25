import { cn } from "@/lib/utils";
import { ShieldCheck, ShieldX } from "lucide-react";
import { memo } from "react";

function ValidationFeedback({
  errorMsg,
  passed,
}: {
  errorMsg: string;
  passed: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      {passed ? (
        <ShieldCheck
          fill="green"
          stroke="white"
          size={20}
          color="green"
          className="[&>path:first-child]:stroke-green-700"
        />
      ) : (
        <ShieldX
          fill="red"
          stroke="white"
          size={20}
          color="red"
          className="[&>path:first-child]:stroke-red-500"
        />
      )}
      <p
        className={cn(
          "text-sm font-medium",
          passed ? "text-[#0B7427]" : "text-red-500"
        )}
      >
        {errorMsg}
      </p>
    </div>
  );
}
export default memo(ValidationFeedback);
