import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/Footer';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
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

          {/* <div className='grid sm:grid-cols-2 gap-2 items-center text-nowrap pr-4 '> */}
          <div className='flex items-center text-nowrap gap-2 px-4 '>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-green-400 text-black'>
              <a href="https://s3.us-east-2.amazonaws.com/every1.click/every1.click+1.1.0.appx" id="downloadLink"
                target="_blank">Download Now</a>
            </div>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-green-400 text-black'>
              Continue Online</div>
          </div>
        </div>
        <div className='bg-slate-50'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
