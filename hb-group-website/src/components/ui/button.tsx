import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[var(--shadow-glow-brand)] hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-accent-500 text-white shadow-[var(--shadow-glow-accent)] hover:bg-accent-600 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-ink-200 text-ink-700 hover:border-brand-500 hover:text-brand-600 bg-white",
  ghost: "text-ink-700 hover:text-brand-600",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", children, className = "", icon } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
      {icon}
    </button>
  );
}
