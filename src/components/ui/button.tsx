import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-hidden focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-background-brand-solid text-text-primary_on-brand shadow-xs hover:bg-background-brand-solid_hover disabled:bg-background-disabled shadow-xs",
        secondary:
          "bg-background-primary text-text-secondary border border-border-primary hover:bg-background-primary_hover hover:text-text-secondary_hover border-border-primary shadow-xs",
        tertiary:
          "text-text-tertiary hover:bg-background-primary_hover hover:text-text-tertiary_hover disabled:text-foreground-disabled",
        linkColor:
          "text-text-brand-secondary hover:underline hover:text-text-brand-secondary_hover disabled:text-foreground-disabled",
        linkGray:
          "text-text-tertiary hover:underline hover:text-text-tertiary_hover disabled:text-foreground-disabled",
      },
      size: {
        sm: "px-lg py-md text-sm leading-sm gap-x-xs",
        md: "px-[14px] py-[10px] text-sm leading-sm gap-x-xs",
        lg: "px-xl py-[10px] text-md leading-md gap-x-sm",
        xl: "px-[18px] py-lg text-md leading-md gap-x-sm",
        link: "p-0 text-sm leading-sm gap-x-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
