import Link from "next/link"
import { Container } from "./Container"
import { ModeToggle } from "./ModeToggle"

export const Header = () => {
	return (
		<header className="relative top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur md:sticky">
			<Container className="flex-row">
				<Link href="/" className="text-2xl sm:text-3xl lg:text-4xl">
					<span className="text-blue-500">Currency</span>
					<span className="text-yellow-400">{" Converter"}</span>
				</Link>
				<div className="flex items-center gap-4 max-md:mr-14">
					<ModeToggle />
					<strong>Current Currency</strong>
				</div>
			</Container>
		</header>
	)
}
