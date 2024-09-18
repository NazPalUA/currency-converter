import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"
import { Container } from "./Container"
import { CurrentCurrency } from "./CurrentCurrency"
import { ModeToggle } from "./ModeToggle"

export const Header = () => {
	return (
		<header className="top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur sticky">
			<Container className="flex justify-between">
				<Link href="/" className="text-2xl sm:text-3xl lg:text-4xl flex gap-2">
					<Image
						src={Logo}
						alt="Currency Converter"
						className="w-8 sm:w-9 lg:w-10  h-8 sm:h-9 lg:h-10 rounded-full object-fit object-center"
					/>
					<span className="text-blue-500">Currency</span>
					<span className="text-yellow-400">{" Converter"}</span>
				</Link>
				<div className="flex items-center gap-4 max-md:mr-14">
					<ModeToggle />
					<CurrentCurrency />
				</div>
			</Container>
		</header>
	)
}
