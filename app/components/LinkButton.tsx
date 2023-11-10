import Link from "next/link";

type LinkProps = {
  text: string;
  href: string;
};

export default function LinkButton({ text, href }: LinkProps) {
  return (
    <Link
      className="flex items-center justify-center px-6 py-2 text-lg font-medium text-slate-700 dark:text-slate-50 border-transparent hover:border-slate-700 dark:hover:border-slate-200 border-2 rounded transition-colors"
      href={href}
    >
      {text}
    </Link>
  );
}
