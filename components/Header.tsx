import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"
import { Container } from "./Container"
import { CurrentCurrency } from "./CurrentCurrency"
import { ModeToggle } from "./ModeToggle"

export const Header = () => {
	return (
		<header>
			<Container className="flex justify-between">
				<Link href="/" className="flex flex-nowrap gap-2 items-center  mr-4">
					<Image
						src={Logo}
						alt="Currency Converter"
						className="w-6 sm:w-7 lg:w-8  h-6 sm:h-7 lg:h-8 rounded-full object-fit object-center"
					/>
					<div className="text-2xl sm:text-3xl lg:text-4xl">
						<span className="text-blue-500">Convert</span>
						<span className="text-yellow-400">It</span>
					</div>
				</Link>

				<div className="flex items-center gap-4">
					<ModeToggle />
					<CurrentCurrency />
				</div>
			</Container>
		</header>
	)
}
