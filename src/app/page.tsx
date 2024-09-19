'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import Card from '@/components/Card';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (

    <div className='flex  justify-center '>
      <div className='flex flex-col gap-4 justify-center items-center lg:w-[76rem] w-full rounded-lg bg-white border p-2'>
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

        <div className='grid md:grid-cols-2 grid-flow-row  gap-4'>
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
  );
}
