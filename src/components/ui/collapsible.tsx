
"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={cn("group", className)}
    {...props}
  >
    {children}
    <style>
      {`
        .group[data-state="open"] .collapsible-plus {
          display: none;
        }
        .group[data-state="open"] .collapsible-minus {
          display: block;
        }
        .group[data-state="closed"] .collapsible-plus {
          display: block;
        }
        .group[data-state="closed"] .collapsible-minus {
          display: none;
        }
      `}
    </style>
  </CollapsiblePrimitive.Trigger>
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="p-0">{children}</div>
  </CollapsiblePrimitive.Content>
))
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
