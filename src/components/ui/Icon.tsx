

export default function Icon(props: { className: string | undefined; icon: string }) {
    return (
        <div className={`${props.className} relative flex items-center justify-center`}>
            <img
                sizes='100%'
                className='object-cover h-auto w-full absolute'
                src={props.icon}
                alt='icon'
            /></div>
    )
}
