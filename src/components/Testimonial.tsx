import { Suspense } from 'react'
import { IframeLoadingState } from './Youtube'

export default function Testimonial() {
  return (
    <section className='space-y-5 py-16'>
      <h2 className='md:text-5xl text-4xl font-normal text-center mb-14'>Client Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-5 ">

        <div className="space-y-4">
          <h2 className='text-base font-normal'>1. Memecoin $HAROLD Testimonial
            $3M MC ${'>'} $44M MC
          </h2>

        </div>
        <div className="space-y-4">
          <h2 className='text-base font-normal'>2. GoArt Metaverse Testimonial </h2>
          <Suspense fallback={<IframeLoadingState />}>
            <iframe
              className='h-64 w-full'
              src="https://www.youtube.com/embed/ofm3kHN6fVA?si=c3RPP8d_9v0VLhbY" title="Lumina"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </Suspense>
        </div>
        <div className="space-y-4">
          <h2 className='text-base font-normal'>3. Coinstore Exchange Testimonial </h2>
          <Suspense fallback={<IframeLoadingState />}>
            <iframe
              className='h-64 w-full'
              src="https://www.youtube.com/embed/dut8bwFCfeE?si=JtWKUdU51YgZ9PL5"
              title="Lumina"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
