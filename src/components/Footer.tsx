import Icon from './ui/Icon'
import Linkedin from '@/assets/icons/linkedinblock.png'
import Twitter from '@/assets/icons/twitterblock.png'
// import Instagram from '@/assets/icons/instagram.png'
import Discord from '@/assets/icons/discord.png'


export default function Footer() {
    return (
        <section className='lg:pt-28 md:pt-20 pt-14 pb-16 mt-44 grid justify-center text-center bg-black'>
            <div className="flex lg:gap-12 md:gap-7 gap-4 items-center mb-16 justify-center">
                <a href={'https://www.linkedin.com/company/luminacrypto/'}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={Linkedin} />
                </a>
                <a href={'https://x.com/lumina_io'}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={Twitter} />
                </a>
                <a href={'https://discord.gg/luminaweb3'}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={Discord} />
                </a>
            </div>
            <div className="flex items-center gap-4 md:gap-7 lg:gap-14 mb-7">
                <a href={'#'}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Privacy policy
                    </span>
                </a>
                <a href={'#'}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Term of service
                    </span>
                </a>
                <a href={'#'}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Language
                    </span>
                </a>
            </div>
            <p className='text-[10px] md:text-sm lg:text-base'>© 2024 LUMINA</p>
        </section>
    )
}
