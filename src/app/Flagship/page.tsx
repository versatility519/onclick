'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import Card from '@/components/Card';

/**
 * The main component for the Flagship page.
 * This component is responsible for rendering the content of the Flagship page, including the hero section, the desktop demo, and the feature cards.
 */
export default function Flagship() {
  return (

    <div className='flex w-full '>
      <div className='w-[32rem] px-2 border-r-2 items-center h-screen flex flex-col gap-4 justify-center  text-center border-black'>
        <div className='flex flex-col gap-4'>

          <p className=' text-xl'>The Advantage</p>
          <div className='flex  flex-col gap-4 rounded-lg p-4 text-center border border-black'>
            <p>Big Tech ➔ Advertisers ➔ Websites ➔ You</p>
            <p>Traditional flow where profits stop at big companies. Websites display ads, but users gain nothing directly.</p>
            <p>$4.45/day (You help them make)</p>
          </div>

          <div className='flex  flex-col gap-4 rounded-lg p-4 text-center border border-black'>
            <p>Advertisers ➔ You (with OCyrus) ➔ You</p>
            <p>With OCyrus, advertisers pay you directly for hosting ads. Earn more by cutting out middlemen.</p>
            <p>$2.40/day (Your Earnings)</p>
          </div>

        </div>
        <div className='  text-1xl  hover:bg-green-400 bg-opacity-50 px-4 py-2 rounded  border border-black'>
          <a href="https://s3.us-east-2.amazonaws.com/every1.click/every1.click+1.1.0.appx" id="overlayDownloadLink" target="_blank">
            Download Now
          </a>
        </div>

      </div>

      <div>
        asdfafda
      </div>

    </div>
  );
}
