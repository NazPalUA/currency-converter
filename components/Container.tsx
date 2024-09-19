import { cn } from "@/lib/utils"
import * as React from "react"

export const Container = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"container min-w-[320px] max-w-7xl p-5 md:px-10 mx-auto",
			className
		)}
		{...props}
	/>
))

Container.displayName = "Container"
