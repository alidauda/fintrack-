import { cn } from "@/utils/cn";

interface BadgeProps {
  value: string;
  variant: "success" | "warning" | "error";
}

export default function Badge({ value, variant }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-background-secondary rounded-full px-2 py-1" style={{width: 'fit-content'}}>
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-2 h-2 bg-background-tertiary rounded-full",
            variant === "success" && "bg-background-tertiary",
            variant === "warning" && "bg-background-secondary",
            variant === "error" && "bg-red-400"
          )}
        ></div>
        <p className="text-text-secondary text-[15px] leading-[20px] font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
