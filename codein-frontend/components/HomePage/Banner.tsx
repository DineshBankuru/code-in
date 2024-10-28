import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='flex flex-col gap-6 px-4 py-5 sm:gap-8 md:flex-row lg:py-10'>
        <Image
          src={
            'https://cdn.usegalileo.ai/sdxl10/0b6d8088-58de-4751-afe0-032fd49e2f55.png'
          }
          alt='mainBanner'
          width={300}
          height={300}
          className='aspect-video w-auto max-w-fit rounded-xl bg-cover bg-center bg-no-repeat sm:h-[200px] sm:w-[200px] md:max-w-[500px] lg:h-[350px] lg:w-[400px]'
        />
        <div className='flex flex-col gap-6 text-black dark:text-white'>
          <div className='flex flex-col gap-2 text-left'>
            <h1 className='mb-2 text-balance text-2xl font-bold leading-tight tracking-[-0.033em] sm:text-3xl md:text-4xl lg:text-5xl'>
              Welcome to the Programming Hub Community
            </h1>
            <h2 className='text-wrap text-sm sm:text-base lg:leading-relaxed'>
              A place to collaborate, learn, and grow. Whether you're just
              starting out or you're an experienced developer, join us in
              shaping the future of tech.
            </h2>
          </div>
          <button className='btnClass flex w-full sm:w-auto'>
            <span className='truncate'>Join the Community</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Banner
