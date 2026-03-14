import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    isError,
    errorMessage,
    id,
    className,
    wrapperClassName,
    placeholder,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const hasError = isError && Boolean(errorMessage);

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label htmlFor={inputId} className="mb-1 block text-clamp-xs font-bold text-black">
        {label}
      </label>

      <div className="group relative">
        <span
          className={cn(
            "pointer-events-none absolute left-0 top-0 h-full w-2 rounded-l-[5px] transition-opacity",
            isError ? "bg-red" : "bg-orange",
            isError ? "opacity-100" : "opacity-0 group-focus-within:opacity-100",
          )}
          aria-hidden
        />

        <input
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          className={cn(
            "h-12 w-full rounded-[5px] border bg-white text-clamp-sm text-black outline-none transition-colors placeholder:text-dark-grey",
            isError ? "border-red focus:border-red" : "border-grey focus:border-orange",
            "pl-8 pr-5",
            className,
          )}
          aria-invalid={isError}
          aria-describedby={hasError ? errorId : undefined}
          {...props}
        />
      </div>

      {hasError ? (
        <p id={errorId} className="text-clamp-xs font-bold text-red" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
});

