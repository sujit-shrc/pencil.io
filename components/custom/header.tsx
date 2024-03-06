import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "./theme-toggle"
import { CaretDownIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { MoveRight } from "lucide-react"


export const Header = () => {
    return (
        <nav className="flex items-center justify-between mx-2 md:mx-12 lg:mx-20 md:my-6 lg:my-10">
            <div className="flex items-center md:gap-10 lg:gap-14">
                <div className="flex items-center gap-2">
                    <p className="text-yellow-500"><Pencil2Icon  className="h-7 w-7" /></p>
                    <h1 className="text-2xl font-bold">pencil.io</h1>
                </div>
                <ul className="flex items-center gap-6 text-sm">
                    <li className="flex items-center gap-0.5">
                        <span>Use cases</span>
                        <span><CaretDownIcon className="h-5 w-5" /></span>
                    </li>
                    <li className="flex items-center gap-0.5">
                        <span>Resources</span>
                        <span><CaretDownIcon className="h-5 w-5" /></span>
                    </li>
                    <li className="flex items-center gap-0.5">
                        <span>About</span>
                        <span><CaretDownIcon className="h-5 w-5" /></span>
                    </li>
                    <li className="flex items-center gap-0.5">
                        <span>AI-GPT</span>
                    </li>
                    <li className="flex items-center gap-0.5">
                        <span>Pricing</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <p>Log in</p>
                <Button>
                    <MoveRight className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <ModeToggle/>
            </div>
        </nav>
    )
}