'use client';

import Footer from '@/components/Footer';
import * as React from 'react';
import '@/lib/env';

import Card from '@/components/Card';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>

      <div className='flex flex-col w-full items-center justify-center'>
        <div className="relative sm:p-8 p-2">
          <img src="https://www.collectivemeasures.com/wp-content/uploads/2020/07/fullsizeoutput_1b6-scaled.jpeg" alt="Your Image" className="rounded-lg" />
          <div className="absolute lg:top-80 top-48 inset-0 flex flex-col gap-8 items-center">
            <p className="flex  text-white text-center lg:text-[6vw] md:text-3xl  text-2xl font-bold px-2">Available Now on Desktop</p>
            <div className="text-white xl:mt-28 lg:text-3xl md:text-2xl text-lg font-bold bg-gray-100 hover:bg-green-400 bg-opacity-50 px-4 py-2 rounded">
              <a href="https://s3.us-east-2.amazonaws.com/every1.click/every1.click+1.1.0.appx" id="overlayDownloadLink" target="_blank">
                Download Now
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 justify-center items-center xl:w-[80rem] w-full rounded-lg bg-white border px-2 py-6 mt-8 '>
          <p className='text-2xl text-center'>Desktop Demo - Learn how to use a corner of your desktop to make money with our toolbar.</p>
          <video className='rounded-md' width="640" height="360" controls muted preload="none">
            <source src="/path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='flex flex-col gap-4 justify-center items-center xl:w-[80rem] w-full rounded-lg bg-white border p-2 mt-8 '>
          <div className='flex flex-col text-center gap-3 py-4'>
            <p className='text-2xl text-blue-600 font-bold'>Your Data, Your Rules</p>
            <p className='text-lg'> OCYRUS empowers you to take control of your online experience. Stop being the product—start owning your space.</p>
          </div>

          <div className='grid md:grid-cols-3 grid-flow-row  gap-4'>
            <Card
              title="Earning While Gaming"
              description={"If you're a teenager who loves gaming, use OCYRUS to earn money while playing your favorite games. Fund your Xbox membership just by having fun with your friends."}
              image="https://spunout-images.s3.amazonaws.com/articles/using-laptops-and-computers_t20_0xneEo.jpg" />
            <Card
              title="A Solution for the Homebound"
              description={"Can't leave the house? No worries. With OCYRUS, you can make money just by staying at home and doing what you love online."}
              image="https://t3.ftcdn.net/jpg/04/18/31/36/360_F_418313681_ZEJgQR7ffz26giAjO8gm3z7ISNgE3lUT.jpg" />
            <Card
              title="Passive Income for Students"
              description={"As a student, your time is valuable. OCYRUS lets you earn money passively while you focus on your studies or hobbies."}
              image="https://www.diabetesdaily.com/wp-content/blogs.dir/21/files/2020/12/iStock-641032540-scaled.jpg" />
          </div>

          <div className='grid md:grid-cols-2 grid-flow-row w-full gap-4'>
            <Card
              title="Relax and Earn"
              description={"Enjoy your downtime while OCYRUS helps you earn money without lifting a finger."}
              image="https://img.freepik.com/free-photo/man-taking-e-leraning-courses_23-2149231590.jpg" />
            <Card
              title="Engage with Community"
              description={"Connect with like-minded peers and earn rewards for participating in the OCYRUS community."}
              image="https://blogs.bath.ac.uk/iprblog/wp-content/uploads/sites/115/2019/06/Integration.png" />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
