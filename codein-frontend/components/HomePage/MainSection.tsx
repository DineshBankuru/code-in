import {
  connectLearnExcelData,
  safetyAndTrustData,
  resourceHubData,
  followUsData
} from '@/utils/constants/constants'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../ui/carousel'
import Image from 'next/image'

const MainSection = () => {
  return (
    <>
      <div className='flex flex-col gap-10 px-4 py-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='tracking-light @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] text-[32px] font-extrabold leading-tight'>
            Connect, Learn, Excel
          </h1>
          <p className='max-w-[720px] text-base font-normal leading-normal'>
            Discover the core aspects of our community.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3'>
          {connectLearnExcelData.map((card, index) => (
            <div
              key={index}
              className='bgWhite_darkBgBlack flex flex-col gap-3 rounded-lg border border-[#DEDEDE] p-4 dark:border-gray-500'
            >
              <div
                className=''
                data-icon={card.icon}
                data-size='24px'
                data-weight='regular'
              >
                <Image
                  src={card.imageSrc}
                  width={24}
                  height={24}
                  alt={card.icon.toLowerCase()}
                  className='dark:fill-white dark:invert'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-base font-bold leading-tight'>
                  {card.title}
                </h2>
                <p className='text-sm font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className='px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em]'>
        Safety &amp; Trust
      </h3>
      <div className='grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3'>
        {safetyAndTrustData.map((card, index) => (
          <div
            key={index}
            className='bgWhite_darkBgBlack flex flex-1 flex-col gap-3 rounded-lg border border-[#DEDEDE] p-4 dark:border-gray-500'
          >
            <div
              className=''
              data-icon={card.icon}
              data-size='24px'
              data-weight='regular'
            >
              <Image
                src={card.imageSrc}
                alt={card.icon.toLowerCase()}
                width={24}
                height={24}
                className='dark:fill-white dark:invert'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='text-base font-bold leading-tight'>
                {card.title}
              </h2>
              <p className='text-sm font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className='px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em]'>
        Latest Community Highlights
      </h3>
      <Carousel
        opts={{
          align: 'start',
          // loop: true,
          dragFree: true
        }}
        className='w-full max-w-full p-2'
      >
        <CarouselContent className=''>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 sm:basis-1/3 lg:basis-1/4'
            >
              <div className='p-1'>
                <Card className='border-gray-300 dark:border-[#EEEEEE]/20'>
                  <CardContent className='flex items-center justify-center p-0'>
                    <div className='aspect-square w-full max-w-full'>
                      <Image
                        src={`https://dummyjson.com/image/300?type=webp&text=Book + ${index + 1}`}
                        alt={`Highlight ${index + 1}`}
                        width={300}
                        height={300}
                        className='w-full max-w-full select-none rounded-xl bg-cover bg-center bg-no-repeat'
                      />
                    </div>
                  </CardContent>
                </Card>
                <span className='select-none font-medium'>
                  Book {index + 1}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden h-10 w-10 sm:flex' />
        <CarouselNext className='hidden h-10 w-10 sm:flex' />
      </Carousel>
      <h3 className='px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em]'>
        Resource Hub
      </h3>
      <div className='grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4'>
        {resourceHubData.map((resource, index) => (
          <div key={index} className='flex flex-col gap-3 pb-3'>
            <div
              className='aspect-square w-full rounded-xl border border-gray-300 bg-cover bg-center bg-no-repeat dark:border-[#EEEEEE]/20'
              style={{ backgroundImage: `url(${resource.imageUrl})` }}
            ></div>
            <div>
              <p className='text-base font-medium leading-normal'>
                {resource.title}
              </p>
              <p className='text-balance text-sm font-normal leading-normal text-[#6B6B6B] dark:text-gray-300 lg:text-wrap'>
                {resource.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center px-4 py-3'>
        <button className='btnClass flex-1'>
          <span className='truncate'>Explore Resources</span>
        </button>
      </div>
      <h3 className='px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em]'>
        Follow Us &amp; Contact
      </h3>
      <div className='flex flex-wrap gap-3 px-4 py-3'>
        {followUsData.map((item, index) => (
          <div
            key={index}
            className='flex min-w-[111px] flex-1 basis-[fit-content] flex-col items-start gap-2 rounded-lg border border-[#DEDEDE] p-3 dark:border-gray-500'
          >
            <p className='tracking-light text-2xl font-bold leading-tight'>
              {item.title}
            </p>
            <div className='flex items-center gap-2'>
              <p className='text-sm font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainSection
