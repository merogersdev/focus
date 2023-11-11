import type { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
};

export function H1({ children }: TypographyProps) {
  return <h1 className="text-3xl font-medium mb-8">{children}</h1>;
}

export function H2({ children }: TypographyProps) {
  return (
    <h2 className="flex text-xl font-medium justify-center">{children}</h2>
  );
}
