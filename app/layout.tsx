import { Header } from "@/components/shared/Header"

import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Currency Converter - Convert Currencies Easily",
	description:
		"Quickly convert between major world currencies using our easy-to-use currency converter. Get the latest exchange rates and make accurate conversions for your travels, shopping, and business needs.",
}

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					themes={["light", "dark"]}
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
