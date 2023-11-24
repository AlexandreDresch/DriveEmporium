import { ComponentProps } from "react";

export default function SectionTitle({
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className="mb-2 font-semibold uppercase" {...props}>
      {children}
    </p>
  );
}
