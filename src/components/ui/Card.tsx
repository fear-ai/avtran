import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  "bg-white rounded-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-md hover:shadow-xl hover:scale-105 border border-neutral-200",
        elevated: "shadow-lg hover:shadow-2xl hover:scale-105 border-0",
        outlined: "border-2 border-neutral-300 hover:border-primary-300 shadow-sm",
        filled: "bg-neutral-50 hover:bg-neutral-100 border border-neutral-200",
        gradient: "bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      interactive: {
        true: "cursor-pointer hover:scale-105 transition-transform",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      interactive: false,
    },
  }
)

const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5",
  {
    variants: {
      size: {
        sm: "pb-3",
        md: "pb-4",
        lg: "pb-6",
        xl: "pb-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const cardTitleVariants = cva(
  "font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const cardDescriptionVariants = cva(
  "text-neutral-600",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const cardContentVariants = cva(
  "pt-0",
  {
    variants: {
      size: {
        sm: "pt-2",
        md: "pt-3",
        lg: "pt-4",
        xl: "pt-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const cardFooterVariants = cva(
  "flex items-center pt-6",
  {
    variants: {
      size: {
        sm: "pt-4",
        md: "pt-6",
        lg: "pt-8",
        xl: "pt-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, size, interactive, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardHeaderVariants>>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ size, className }))}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof cardTitleVariants>>(
  ({ className, size, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(cardTitleVariants({ size, className }))}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof cardDescriptionVariants>>(
  ({ className, size, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cardDescriptionVariants({ size, className }))}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardContentVariants>>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ size, className }))}
      {...props}
    />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardFooterVariants>>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ size, className }))}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
