import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "filled" | "outline";
type ButtonColor = "orange" | "pink" | "dark" | "red";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
};

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
  filled: {
    orange: "bg-orange text-white hover:bg-orange/90",
    pink: "bg-pink text-white hover:bg-pink/90",
    dark: "bg-black text-white hover:bg-black/90",
    red: "bg-red text-white hover:bg-red/90",
  },
  outline: {
    orange: "border-2 border-orange bg-white text-orange hover:bg-orange/5",
    pink: "border-2 border-pink bg-white text-pink hover:bg-pink/5",
    dark: "border-2 border-black bg-white text-black hover:bg-black/5",
    red: "border-2 border-red bg-white text-red hover:bg-red/5",
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = "filled",
    color = "dark",
    type = "button",
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "text-clamp-sm inline-flex w-fit shrink-0 items-center justify-center rounded-full px-6 py-2 font-bold tracking-[-0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 cursor-pointer sm:px-8",
        variantClasses[variant][color],
        className,
      )}
      {...props}
    />
  );
});


