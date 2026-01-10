"use client"

import React from "react"
import Link from "next/link"
import styles from "./Button.module.css"

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger"
type Size = "sm" | "md" | "lg"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const cls = [styles.base, styles[`size-${size}`], styles[variant]]
  if (disabled) cls.push(styles.disabled)
  const classNames = cls.filter(Boolean).join(" ") + (className ? ` ${className}` : "")

  if (href) {
    return (
      <Link href={href} className={classNames} aria-disabled={disabled} {...(rest as any)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
