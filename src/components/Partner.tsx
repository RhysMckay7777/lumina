
import CountUp from 'react-countup';
import Carousel from './Carousel';





export default function Partner() {
    const width = window.innerWidth
    const nummber = width < 992 ? 2 : 4



    return (
        <section className='flex justify-center'>
            <div className="pt-5s text-center flex flex-col items-center">
                <h4>
                    Partners in our ecosystem
                </h4>
                <Carousel />

                <div className="lg:mb-32 md:mt-20 md:mb-24 mt-8 mb-16 grid grid-cols-2 md:grid-cols-2 lg:flex items-center gap-x-8 md:gap-x-12 lg:gap-16">
                    {
                        Achieve.map((items, idx) => (
                            <div
                                key={idx}
                                className='flex items-center lg:gap-16 gap-8 md:gap-14'>
                                {
                                    idx % nummber !== 0 ?
                                        <div
                                            className='h-32 w-[1.05px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85% ' /> : <div
                                            className='h-32 hidden w-[1.05px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85% ' />
                                }
                                <div className="text-left">
                                    <h3 className='font-medium lg:text-xl md:text-lg text-base'>
                                        <CountUp
                                            start={0}
                                            end={items.value}
                                            enableScrollSpy={true}
                                            scrollSpyDelay={1}
                                            duration={3}
                                            startOnMount={false}
                                            prefix={items.prefix}
                                        />{items.target}+</h3>
                                    <p className='font-light text-sm'>{items.campaign}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >


        </section >
    )
}


const Achieve = [
    {
        value: 100,
        target: ' Million',
        campaign: 'Funding rasied',
        prefix: '$'
    },
    {
        value: 6,
        target: ' Million',
        campaign: 'Followers',
    },
    {
        value: 14,
        target: 'B',
        campaign: 'FDV Portfolio Clients',
        prefix: '$'
    },
    {
        value: 45,
        campaign: 'Clients',
    }
]
