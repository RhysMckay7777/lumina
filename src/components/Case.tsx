
import CountUp from 'react-countup';
import Icon from './ui/Icon';
import Hackcoin from '@/assets/images/hackCoin.png';
import Basebet from '@/assets/images/basebet.png';
import Zeebit from '@/assets/images/zeebit.png';
import Helio from '@/assets/images/helio.png';
import Minify from '@/assets/images/mintify.png';
import CoinStore from './../assets/images/coinstore.png';
import Seedify from './../assets/images/speadify.jpg';
import IAgent from './../assets/images/i_agent.png';
import Avax from './../assets/images/avax.png';



export default function Case() {
    return (
        <section className='caseStudy pt-24' id='caseStudy'>
            <div>
                <div className="text-center mb-20">
                    <h2 className='lg:text-6xl md:text-5xl text-4xl font-normal '>CASE STUDY</h2>
                    <p className='lg:text-xl md:text-base text-sm max-w-2xl mt-5 opacity-55'>No matter what, our principles remain the same. We don't work on you — we work with you.</p>
                </div>
                <div className="pb-12 ">
                    <div className="grid justify-center">
                        {
                            caseStudy.map((content, index) => {
                                return (
                                    <div key={index}>
                                        <div className={`max-w-2xl md:px-16 px-8 pt-10 pb-20 border-primary before:border-primary z-0 relative before:block before:absolute before:bg-cover before:bg-[url('/images/bodybg.png')] before:inset-y-0 before:-top-[1px] before:w-[50%] before:border-t
                                         ${index == 0 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0 border-t'
                                                : index == 1 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                    : index == 2 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0'
                                                        : index == 3 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                            : index == 4 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0'
                                                                : index == 5 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                                    : index == 6 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0'
                                                                        : index == 7 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                                            : index == caseStudy.length - 1 ? 'rounded-l-3xl before:left-0 before:border-l before:rounded-l-3xl  border-b'

                                                                                : null
                                            }`}>
                                            <div className="flex gap-6 items-center">
                                                <Icon className={'md:h-44 md:w-44 h-20 w-20'} icon={content.icon} />
                                                <div className="grid gap-1 md:gap-3">
                                                    <h4>{content.title}</h4>
                                                    <p className='font-light md:text-sm text-[11px]'>{content.description}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 mt-10">
                                                {
                                                    content.operation.map((items: { value: number; decimal: number; extention?: string | null | undefined; opera: string; suffix?: string; }, idx: any) => {
                                                        return (
                                                            <div key={idx}>
                                                                <h1 className='lg:text-3xl md:text-2xl text-xl font-bold'>
                                                                    <CountUp
                                                                        start={0}
                                                                        end={items.value}
                                                                        enableScrollSpy={true}
                                                                        scrollSpyDelay={1}
                                                                        duration={3}
                                                                        startOnMount={false}
                                                                        prefix={items.suffix}
                                                                        separator={' '}
                                                                        decimals={items.decimal}
                                                                        decimal="."
                                                                    />
                                                                    {items.extention}
                                                                </h1>
                                                                <p className='font-light text-xs opacity-55'>{items.opera}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


const caseStudy = [
    {
        icon: Helio,
        alternative: 'Helio',
        title: 'Helio',
        description: 'An all-in-one crypto payments solution.',
        operation: [
            {
                suffix: '$',
                value: 175,
                decimal: 0,
                extention: 'M',
                opera: 'Acquisition',
            },
            {
                suffix: '$',
                value: 21,
                decimal: 0,
                extention: 'M',
                opera: 'Secondary NFT sale'
            },
            {
                value: 100,
                decimal: 0,
                extention: 'K',
                opera: 'New users'
            },
        ]
    },
    {
        icon: CoinStore,
        alternative: 'Coinstore Exchange',
        title: 'Coinstore Exchange',
        description: 'A Crypto Exchange for Spot & Derivatives.',
        operation: [
            {
                value: 500,
                decimal: 0,
                extention: 'M+',
                opera: 'Daily Volume',
            },
            {
                value: 8,
                extention: 'M+',
                decimal: 0,
                opera: 'Users',
            },
            {
                suffix: 'Top' + ' ',
                value: 50,
                decimal: 0,
                // extention: 'M+',
                opera: 'Exchanges CMC',
            },
        ]
    },
    {
        icon: Seedify,
        alternative: 'Seedify',
        title: 'Seedify',
        description: 'A Web3 Incubator & Launchpad for Gaming Projects.',
        operation: [
            {
                suffix: '$',
                value: 500,
                decimal: 0,
                extention: 'M',
                opera: 'Market Cap',
            },
            {
                suffix: '$',
                value: 3,
                decimal: 0,
                extention: 'M+',
                opera: 'Daily Volume',
            },
            {
                value: 250,
                decimal: 0,
                extention: 'K',
                opera: 'Users',
            },
        ]
    },
    {
        icon: Basebet,
        alternative: 'Basebet',
        title: 'Basebet',
        description: 'My own project. A crypto casino with a lucrative web3 economy.',
        operation: [
            {
                suffix: '$',
                value: 10,
                decimal: 0,
                extention: 'M+',
                opera: 'On platform volume'
            },
            {
                value: 10,
                decimal: 0,
                extention: 'K+',
                opera: 'New users'
            },
            {
                suffix: '$',
                value: 1.2,
                decimal: 1,
                extention: 'M',
                opera: 'NFT sell'
            },
        ]
    },
    {
        icon: Avax,
        alternative: 'Avalanche',
        title: 'Avalanche',
        description: 'Avalanche is a high-performance blockchain platform designed for builders who need to scale.',
        operation: [
            {
                suffix: '$',
                value: 29,
                decimal: 0,
                extention: 'B+',
                opera: 'Market Cap'
            },
            {
                value: 10,
                decimal: 0,
                extention: 'M+',
                opera: 'Monthly Impressions'
            },
            {
                suffix: 'Top' + ' ',
                value: 10,
                decimal: 0,
                // extention: 'M',
                opera: 'MC Token'
            },
        ]
    },
    {
        icon: Hackcoin,
        alternative: 'Hack Coin',
        title: 'School Hack Coin',
        description: 'An innovative platform enhanced by Artificial intelligence to decentralise global education.',
        operation: [
            {
                suffix: '$',
                value: 1,
                decimal: 0,
                extention: 'M+',
                opera: 'Daily volume'
            },
            {
                value: 3,
                decimal: 0,
                extention: 'M+',
                opera: 'Users'
            },
            {
                suffix: '$',
                value: 2.5,
                decimal: 1,
                extention: 'M',
                opera: 'Token raise'
            },
        ]
    },
    {
        icon: Zeebit,
        alternative: 'Zeebit',
        title: 'Zeebit',
        description: 'A decentralised Crypto Casino ',
        operation: [
            {
                suffix: '$',
                value: 9,
                decimal: 0,
                extention: 'M+',
                opera: 'VC Funding',
            },
            {
                value: 20,
                decimal: 0,
                extention: 'K+',
                opera: 'Community members'
            },
            {
                suffix: '$',
                value: 1.3,
                decimal: 1,
                extention: 'M',
                opera: 'NFT Raise'
            },
        ]
    },
    {
        icon: Minify,
        alternative: 'Mintify',
        title: 'Mintify',
        description: 'An NFT Trading platform.',
        operation: [
            {
                value: 200,
                decimal: 0,
                extention: 'K+',
                opera: 'Followers',
            },
            {
                value: 30,
                decimal: 0,
                extention: 'K+',
                opera: 'New users',
            },
            {
                suffix: '$',
                value: 1.6,
                decimal: 1,
                extention: 'M+',
                opera: 'VC funding',
            },
        ]
    },
    {
        icon: IAgent,
        alternative: 'IAgent',
        title: 'IAgent',
        description: ' Create, own and monetize your AI agents for gaming. The first to train AI with visual data instead of text.',
        operation: [
            {
                suffix: '$',
                value: 2.6,
                decimal: 1,
                extention: 'M',
                opera: 'VC Funding',
            },
            {
                value: 8,
                decimal: 0,
                extention: 'M+',
                opera: 'Monthly Impressions',
            },
            {
                value: 150,
                decimal: 0,
                extention: 'K+',
                opera: 'Community members',
            },
        ]
    }
]