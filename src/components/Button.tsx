import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className, children, ...rest }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition'
  const variants: Record<string, string> = {
    primary: `${base} bg-primary text-white hover:opacity-95 focus:ring-2 focus:ring-primary/30`,
    ghost: `${base} bg-transparent border border-gray-200 text-gray-800 hover:bg-gray-50`,
  }

  return (
    <button className={clsx(variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
