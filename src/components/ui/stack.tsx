"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap = "md", children, ...props }, ref) => {
    const gapClasses = {
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

export { Stack };
