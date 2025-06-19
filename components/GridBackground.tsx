import * as React from "react";
import { cn } from "@/lib/utils";

export function GridBackground({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative bg-black overflow-hidden w-full min-h-screen",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#fff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}