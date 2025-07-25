"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({
  src,
  alt,
  fallback,
  className,
}: OptimizedAvatarProps) {
  const [error, setError] = React.useState(false);

  // Check for external image (http or https)
  const isExternal = /^https?:\/\//.test(src);

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-xl bg-muted",
        className
      )}
    >
      {!error && src ? (
        <Image
          src={src}
          alt={alt}
          width={112}
          height={112}
          className="aspect-square h-full w-full object-cover"
          onError={() => setError(true)}
          priority={true}
          unoptimized={isExternal}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
          {fallback}
        </div>
      )}
    </div>
  );
}