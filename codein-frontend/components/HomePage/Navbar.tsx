'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '../themes/ModeToggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
  return (
    <header className='flex items-center justify-between border-b border-solid border-b-[#EEEEEE] px-3 py-3 dark:border-b-[#EEEEEE]/20 sm:px-10'>
      <div className='flex items-center gap-4 text-black dark:text-white'>
        <div className='size-4'>
          <svg
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        <h2 className='hidden select-none text-lg font-bold leading-tight tracking-[-0.015em] sm:block'>
          Programming Hub Community
        </h2>
        <h2 className='text-lg font-bold leading-tight tracking-[-0.015em] sm:hidden'>
          PH Community
        </h2>
      </div>
      <div className='hidden flex-1 justify-end gap-8 text-nowrap sm:flex'>
        <div className='flex items-center gap-9'>
          <Link href='/' className='text-sm font-medium leading-normal'>
            Home
          </Link>
          <Link href='/' className='text-sm font-medium leading-normal'>
            Resources
          </Link>
          <Link
            href='/privacy-policy'
            className='text-sm font-medium leading-normal'
          >
            Privacy Policy
          </Link>
          <Link
            href='/contact-us'
            className='text-sm font-medium leading-normal'
          >
            Contact Us
          </Link>
        </div>
        <button className='flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition duration-300 ease-in-out hover:border hover:border-black hover:bg-white hover:text-black dark:border dark:border-white dark:bg-white dark:text-black dark:hover:border dark:hover:border-white dark:hover:bg-black dark:hover:text-white'>
          <span className='truncate'>Join the Community</span>
        </button>
        <div
          className='aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/sdxl10/ae8f40d1-fa58-4d57-b2ab-cd74a3346b51.png")'
          }}
        ></div>
        <ModeToggle />
      </div>
      <div className='flex items-center space-x-2 sm:hidden'>
        <ModeToggle /> {/* Move ModeToggle here */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon'>
              <Menu className='h-[1.2rem] w-[1.2rem]' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className='flex flex-col space-y-4'>
              <Link href='/' className='text-sm font-medium leading-normal'>
                Home
              </Link>
              <Link href='/' className='text-sm font-medium leading-normal'>
                Resources
              </Link>
              <Link
                href='/privacy-policy'
                className='text-sm font-medium leading-normal'
              >
                Privacy Policy
              </Link>
              <Link
                href='/contact-us'
                className='text-sm font-medium leading-normal'
              >
                Contact Us
              </Link>
              <button className='flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white dark:border dark:border-white dark:bg-white dark:text-black'>
                <span className='truncate'>Join the Community</span>
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
