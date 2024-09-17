"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error("Error boundary caught an error:", error)
	}, [error])

	return (
		<main>
			<Container className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background">
				<h1 className="text-4xl font-bold text-destructive mb-4">
					Oops! Something went wrong.
				</h1>
				<p className="text-lg text-muted-foreground mb-6">{error.message}</p>
				<Button onClick={() => reset()} variant="default" className="mb-4">
					Try Again
				</Button>
			</Container>
		</main>
	)
}
