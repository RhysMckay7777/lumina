import React from 'react'
import Icon from '../ui/Icon'
import Linkedin from '@/assets/icons/linkedin.png'
import Twitter from '@/assets/icons/twitter.png'

export default function Personal(props: { image: any; position: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; linkedin: any; twitter: any; id: number; }) {
    return (
        <div className='w-auto max-w-[352] grid justify-center p-4 bg-[#0E0E0E] text-center gap-3'>
            <div className='w-full h-80 min-w-[320px] max-w-[400px] relative'>
                <img
                    sizes='100%'
                    className='object-cover h-full w-full absolute'
                    src={props.image}
                    alt={'Team Member'}
                /></div>
            <h3 className='font-medium md:text-lg text-base'>{props.position}</h3>
            <p className='md:text-sm font-light text-xs'>{props.title}</p>
            <div className="flex items-center justify-center gap-5">
                <a href={props.linkedin}>
                    <Icon className={'h-7 w-7'} icon={Linkedin} />
                </a>
                <a href={props.twitter}>
                    <Icon className={'h-7 w-7'} icon={Twitter} />
                </a>

            </div>
        </div>
    )
}
