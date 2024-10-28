'use client'

import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='flex max-w-[960px] flex-1 flex-col'>
        <footer className='@container flex flex-col gap-6 px-5 py-10 text-center'>
          <div className='@[480px]:flex-row @[480px]:justify-around flex flex-wrap items-center justify-center gap-6'>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/'
            >
              Home
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/resources'
            >
              Resources
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/privacy-policy'
            >
              Privacy Policy
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/contact-us'
            >
              Contact Us
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/dsa-whatsapp-group'
            >
              Join our DSA WhatsApp Group
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/web-development-whatsapp-group'
            >
              Join our Web Development WhatsApp Group
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/placement-materials-whatsapp-group'
            >
              Get Placement Materials on WhatsApp
            </Link>
            <Link
              className='min-w-40 text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'
              href='/contact-us'
            >
              Contact Us
            </Link>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#'>
              <div
                className='text-[#6B6B6B] dark:text-gray-300'
                data-icon='WhatsappLogo'
                data-size='24px'
                data-weight='regular'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24px'
                  height='24px'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z'></path>
                </svg>
              </div>
            </a>
            <a href='#'>
              <div
                className='text-[#6B6B6B] dark:text-gray-300'
                data-icon='WhatsappLogo'
                data-size='24px'
                data-weight='regular'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24px'
                  height='24px'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z'></path>
                </svg>
              </div>
            </a>
            <a href='#'>
              <div
                className='text-[#6B6B6B] dark:text-gray-300'
                data-icon='WhatsappLogo'
                data-size='24px'
                data-weight='regular'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24px'
                  height='24px'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z'></path>
                </svg>
              </div>
            </a>
          </div>
          <p className='text-base font-normal leading-normal text-[#6B6B6B] dark:text-gray-300'>
            2024 Programming Hub Community. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  )
}
