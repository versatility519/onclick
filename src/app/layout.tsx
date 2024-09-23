import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';
import Link from 'next/link';
import { LuAlignJustify } from "react-icons/lu";
import Logo from '~/images/logo.png';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body>
        <div className='sm:flex flex-none w-full py-2 bg-red-600 justify-between'>
          <Link href={'/'}>





            <div className='flex items-center text-white  '>
              <Image
                className='w-20 h-20 rounded-full'
                src={Logo}
                alt="Picture of the author"
              />
              <div className='text-nowrap'>
                <p className='font-semibold text-2xl'>every1.click</p>
                <p className=''>Secure Your Pixels, Own Your Space</p>
              </div>
            </div>
          </Link>
        
          {/* <div className='grid sm:grid-cols-2 gap-2 items-center text-nowrap pr-4 '> */}
          <div className='flex items-center text-base justify-around text-nowrap gap-2 px-4 '>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-green-400 text-black'>
              <a href="https://s3.us-east-2.amazonaws.com/every1.click/every1.click+1.1.0.appx" id="downloadLink"
                target="_blank">Download Now</a>  
            </div>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-green-400 text-black'>
              <Link href="/Flagship">Continue Online</Link>
            </div>








{/* 
            {/* <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20"> */}
            <div className=" group relative cursor-pointer py-2">

              {/* <div className="flex items-center justify-between p-2 bg-white px-4"> */}
                {/* <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" > */}
                  <LuAlignJustify className='text-white size-8 my-2 rounded-lg' />
                {/* </a> */}
                 



              {/* </div> */}

              <div */}
                className="invisible absolute right-0 z-50 flex   flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Articles
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  About Us
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Contract Us
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Privary Policy
                </a>

              </div>
            </div>

          </div>
        </div>


        <div className='bg-slate-50'>
          {children}
        </div>

      </body>
    </html>
  );
}
