
import { Suspense } from 'react'

export default function Youtube() {
    return (
        <section className='flex justify-center md:pb-32 pb-10'>
            <div className="flex flex-col items-center lg:gap-14 md:gap-10 gap-7  w-screen">
                <h4 className='max-w-5xl mx-auto'>
                    Lumina has helped over 63+ crypto companies raise
                    over $100m million & acquire millions of users.
                </h4>
                <Suspense fallback={<IframeLoadingState />}>
                  <iframe
                        className='max-w-[1100px] bg-white md:h-[600px] h-64 w-full'
                   src="https://www.youtube.com/embed/Z35RqTHpb1o?si=X63di7e95XnKHr4H" 
                        title="Lumina"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </Suspense>
            </div>
        </section>
    )
}

export const IframeLoadingState = () => {
    return (
        <div className="max-w-[560px] max-h-[315px] h-full w-full bg-stone-800 animate-pulse flex items-center justify-center">
            <p className='text-lg font-normal '>Loading Video</p>
        </div>
    )
}
