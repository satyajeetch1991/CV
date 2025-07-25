import React from "react";
import { cn } from "@/lib/utils";

interface SectionSkeletonProps {
  className?: string;
  lines?: number;
}

export function SectionSkeleton({
  className,
  lines = 3,
}: SectionSkeletonProps) {
  return (
    <output
      className={cn("space-y-4", className)}
      aria-label="Loading section"
      role="status"
      aria-busy="true"
    >
      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
      <div className="space-y-2">
        {[...Array(lines)].map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: Static skeleton content doesn't reorder
            key={`skeleton-line-${i}`}
            className={cn(
              "h-4 bg-gray-200 rounded animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200",
              i === lines - 1 ? "w-3/4" : "w-full"
            )}
          />
        ))}
      </div>
      <span className="sr-only">Loading content...</span>
    </output>
  );
}