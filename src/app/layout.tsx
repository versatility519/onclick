import { Metadata } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import Footer from '@/components/Footer'

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
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

  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className='flex w-full py-2 bg-red-600 justify-between px-4'>
          <div className='text-white  '>
            <p className='font-semibold text-2xl'>every1.click</p>
            <p>Secure Your Pixels, Own Your Space</p>
          </div>

          <div className='flex text-nowrap items-center  gap-2'>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-slate-400 text-black'>Download Now</div>
            <div className='bg-white cursor-pointer rounded-md px-2 py-1 hover:bg-slate-400 text-black'>Continue Online</div>
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
