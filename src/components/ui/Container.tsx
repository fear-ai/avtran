import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva(
  "mx-auto px-4",
  {
    variants: {
      size: {
        sm: "max-w-4xl px-4 sm:px-6",
        md: "max-w-6xl px-4 sm:px-6 lg:px-8",
        lg: "max-w-7xl px-4 sm:px-6 lg:px-8",
        xl: "max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-12",
        full: "max-w-none px-4 sm:px-6 lg:px-8 xl:px-12",
      },
      padding: {
        none: "px-0",
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
        xl: "px-12",
      },
      center: {
        true: "mx-auto",
        false: "mx-0",
      },
    },
    defaultVariants: {
      size: "md",
      padding: "sm",
      center: true,
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, center, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size, padding, center, className }))}
      {...props}
    />
  )
)
Container.displayName = "Container"

export { Container, containerVariants }
