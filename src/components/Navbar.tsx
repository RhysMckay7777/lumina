import Tab from '@/assets/icons/tab.png';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Telegram from '@/assets/icons/telegram.png'
import Twitter from '@/assets/icons/twitterblack.png'
import Discord from '@/assets/icons/discordblack.png'
import Logo from '@/assets/images/logo.png'
import Icon from "./ui/Icon"
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={scrolled ? 'inset-x-0 fixed top-0 bg-black z-50 py-6 translate-y-0 transition-all ease-linear duration-500' : 'inset-x-0 absolute py-10'}>
            <nav className="flex items-center justify-between lg:px-16 md:px-10 px-6 bg-transparent">
                <a href={'/'}>
                    <Icon icon={Logo} className='h-5 md:h-7  lg:w-44 w-24' />
                </a>
                <Sheet>
                    <SheetTrigger asChild>
                        <div>
                            <img src={Tab}
                                width={30}
                                height={30}
                                alt={'chevron'} />
                        </div>
                    </SheetTrigger>
                    <SheetContent className="bg-white text-black pt-28 text-left">
                        <SheetHeader className="text-left">
                            <SheetTitle className="text-primary font-medium md:text-sm text-xs">Menu</SheetTitle>
                            <SheetDescription className="pt-5 grid gap-4">
                                <a href={'#'}>
                                    <p className="md:text-xl text-base">Home</p>
                                </a>
                                <a href={'#services'}>
                                    <p className="md:text-xl text-base">Service</p>
                                </a>
                                <a href={'#caseStudy'}>
                                    <p className="md:text-xl text-base">Case study</p>
                                </a>
                                <a href={'#bookNow'}>
                                    <p className="md:text-xl text-base">Book us now</p>
                                </a>
                            </SheetDescription>
                        </SheetHeader>

                        <div className="pt-28">
                            <SheetTitle className="text-primary font-medium md:text-sm text-xs">Socials</SheetTitle>
                            <SheetDescription className="pt-10 grid gap-5">
                                <a href={'https://x.com/lumina_io'} className="flex gap-3 items-center">
                                    <Icon icon={Twitter} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Twitter</p>
                                </a>
                                <a href={'https://discord.gg/luminaweb3'} className="flex gap-3 items-center">
                                    <Icon icon={Discord} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Discord</p>
                                </a>
                                <a href={'#'} className="flex gap-3 items-center">
                                    <Icon icon={Telegram} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Telegram</p>
                                </a>
                            </SheetDescription>
                        </div>

                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}
