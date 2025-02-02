import Icon from './ui/Icon'
import StarLong from '@/assets/icons/starLong.png'



export default function Achievements() {
    return (
        <section className='pb-24 pt-10' id='services'>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-5">
                    <Icon icon={StarLong} className={'h-10 w-10'} />
                    <h3 className='text-lg md:text-xl lg:text-4xl font-normal'>
                        Experience real solutions at{' '}<span className='text-primary'>Lumina.</span>
                    </h3>
                    <Icon icon={StarLong} className={'h-10 w-10'} />
                </div>
                <div className="max-w-5xl mt-20 grid md:grid-cols-2 lg:gap-x-32 md:gap-x-20 gap-y-10">
                    {
                        Experience.map((item, idx) => {
                            return (
                                <div key={idx}
                                    className="max-w-xl grid gap-2">
                                    <h5 className='font-semibold md:text-xl text-base'>{item.title}</h5>
                                    <p className='opacity-55 font-light text-xs md:text-base'>{item.description}</p>

                                    <div
                                        className='h-[1px] w-full bg-gradient-to-r from-primary via-primary to-primary/0 from-25% via-55% to-85% mt-10' />

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const Experience = [
    {
        title: 'VC Funding',
        description: 'We help raise capital for Tier 1 projects, through our syndicate of 300+ Venture Capital Relations.'
    },
    {
        title: 'GTM Solution',
        description: 'We design, develop & execute everything from A-Z in terms of bringing your product to market in the most compelling way possible.'
    },
    {
        title: 'PR & Influencers',
        description: 'We have a high-value network with the biggest influencers in the industry, as-well as all of the top media outlets.'
    },
    {
        title: 'Exchange Relations',
        description: 'We have connection with every exchange in the industry from Bybit & OKX to new exchanges coming to market.'
    },
    {
        title: 'Ambassadors & Content Creators',
        description: 'Building our own community of over 5,000+ we have a huge network of content creators we can engage at any point.'
    },
    {
        title: 'DAOs & Communities ',
        description: 'We have a DAO of 5,000+ members who are actively seeking new opportunities in the market. Additional to our network of over 500+ Communities inside web3.'
    }
]