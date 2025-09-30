"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
    /* Disabled */
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
    /* Focus Visible */
    "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
    /* Resets */
    "focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground data-[hovered]:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90",
        outline:
          "border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80",
        ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
        link: "text-primary underline-offset-4 data-[hovered]:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

// FIX: Refactor Button component to correctly handle props and children.
// The component is now wrapped with `React.forwardRef` and destructuring is moved inside
// the function body to avoid TypeScript inference issues with complex prop types.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, size, children, ...rest } = props
    return (
      <AriaButton
        ref={ref}
        {...rest}
        className={composeRenderProps(className, (className) =>
          cn(buttonVariants({ variant, size, className }))
        )}
      >
        {children}
      </AriaButton>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }