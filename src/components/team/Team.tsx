import Personal from './Personal'
import Fouunder from '@/assets/images/founder.png';
import Business from '@/assets/images/development.jpeg';
import Operation from '@/assets/images/marketing.jpeg';
import Head from '@/assets/images/collaboration.png';
import Community from '@/assets/images/community.png';
import Development from './../../assets/images/business.png';

export default function Team() {
    return (
        <section className='lg:pt-36 pt-20'>
            <div>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-10 lg:gap-12 gap-5  max-w-5xl mx-auto">
                    <h1 className='lg:text-6xl md:text-4xl text-3xl font-normal'>
                        MEET THE <br />
                        TEAM
                    </h1>
                    <p className='font-light lg:text-xl text-base opacity-55 max-w-md'>
                        Meet the team at lumina. we are specialiy
                        qualified with the right experience in bringing out the teams success </p>
                </div>
                <div className="lg:flex grid md:grid-cols-2 flex-wrap justify-center items-center gap-9">
                    {
                        TeamMembers.map((items, idx) => {
                            return (
                                <Personal
                                    key={idx}
                                    id={idx}
                                    image={items.image}
                                    position={items.position}
                                    title={items.title}
                                    linkedin={items.linkedin}
                                    twitter={items.twitter} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const TeamMembers = [
    {
        image: Fouunder,
        title: 'Rhys Mckay',
        position: 'Founder',
        twitter: '#',
        linkedin: '#',
    },
    {
        image: Development,
        title: 'Cullen Iwata',
        position: 'Business Development',
        twitter: '#',
        linkedin: '#',
    },
    {
        image: Business,
        title: 'John Rodriguez',
        position: 'Business Development',
        twitter: '#',
        linkedin: '#',
    },
    {
        image: Operation,
        title: 'Harley Hume',
        position: 'Head of Operation',
        twitter: '#',
        linkedin: '#',
    },
    {
        image: Head,
        title: 'Moh1shh',
        position: 'Head of collaborations',
        twitter: '#',
        linkedin: '#',
    },
    {
        image: Community,
        title: 'PUNK',
        position: ' Community specialist',
        twitter: '#',
        linkedin: '#',
    },
]