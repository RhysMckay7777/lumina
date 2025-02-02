
import CountUp from 'react-countup';
import Icon from './ui/Icon';
import Hackcoin from '@/assets/images/hackCoin.png';
import Basebet from '@/assets/images/basebet.png';
import Zeebit from '@/assets/images/zeebit.png';
import Helio from '@/assets/images/helio.png';
import Le7el from '@/assets/images/le7el.png';
import Minify from '@/assets/images/mintify.png';



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
                                                                : index == 5 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl  border-b'
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
                                                    content.operation.map((items: { value: number; extention: string | null | undefined; opera: string; suffix?: string; }, idx: any) => {
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
        icon: Hackcoin,
        alternative: 'Hack Coin',
        title: 'School Hack Coin',
        description: 'An innovative platform enhanced by Artificial intelligence to decentralise global education.',
        operation: [
            {
                suffix: '$',
                value: 1,
                extention: 'M+',
                opera: 'Daily volume'
            },
            {
                value: 3,
                extention: 'M+',
                opera: 'Users'
            },
            {
                suffix: '$',
                value: 2.5,
                extention: 'M',
                opera: 'Token raise'
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
                extention: 'M+',
                opera: 'On platform volume'
            },
            {
                value: 10,
                extention: 'K+',
                opera: 'New users'
            },
            {
                suffix: '$',
                value: 10,
                extention: 'K',
                opera: 'NFT sell'
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
                extention: 'M+',
                opera: 'VC Funding',
            },
            {
                value: 20,
                extention: 'K+',
                opera: 'Community members'
            },
            {
                suffix: '$',
                value: 700,
                extention: 'K',
                opera: 'NFT Raise'
            },
        ]
    },
    {
        icon: Helio,
        alternative: 'Helio',
        title: 'Helio',
        description: 'An all-in-one crypto payments solution.',
        operation: [
            {
                suffix: '$',
                value: 3.3,
                extention: 'M',
                opera: 'VC Funding',
            },
            {
                suffix: '$',
                value: 21,
                extention: 'M',
                opera: 'Secondary NFT sale'
            },
            {
                value: 100,
                extention: 'K',
                opera: 'New users'
            },
        ]
    },
    {
        icon: Le7el,
        alternative: 'LE7EL',
        title: 'LE7EL',
        description: 'A web3 Gaming protocol.',
        operation: [
            {
                value: 100,
                extention: 'K+',
                opera: 'New users',
            },
            {
                value: 400,
                extention: '+',
                opera: 'Colaborations',
            },
            {
                value: 2,
                extention: 'M+',
                opera: 'Impressions',
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
                extention: 'K+',
                opera: 'Followers',
            },
            {
                value: 30,
                extention: 'K+',
                opera: 'New users',
            },
            {
                suffix: '$',
                value: 1.6,
                extention: 'M+',
                opera: 'VC funding',
            },
        ]
    },
]