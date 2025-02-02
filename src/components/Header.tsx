

export default function Header(props: { title: string | null | undefined; description: string | null | undefined }) {
    return (
        <section className='header py-20 text-center grid gap-4'>
            <h1 className='text-7xl font-medium'>{props.title}</h1>
            <p className='max-w-2xl mx-auto text-base font-light'>
                {props.description}
            </p>
        </section>
    )
}
