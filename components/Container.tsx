import { cn } from "@/lib/utils"
import * as React from "react"

export const Container = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex w-full  max-w-7xl flex-col items-center justify-between p-5 md:px-10 lg:mx-auto xl:px-0",
			className
		)}
		{...props}
	/>
))

Container.displayName = "Container"
