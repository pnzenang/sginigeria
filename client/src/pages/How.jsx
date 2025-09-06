/* eslint-disable react/prop-types */
import { GoStack } from 'react-icons/go';
import { PiIntersectLight } from 'react-icons/pi';
import { BiCodeAlt } from 'react-icons/bi';
import { BsUmbrella } from 'react-icons/bs';

import ScrollToTop from 'react-scroll-to-top';

const Tabs = () => {
  return (
    <section className='bg-base-200  align-element '>
      <div className='container mx-auto flex flex-col p-6'>
        <div className='divide-y '>
          <div className='grid justify-center items-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <GoStack className='w-16 h-16 text-primary ' />
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center text-base-content col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-lg tracking-wider uppercase font-extrabold dark:text-violet-600'>
                Step 1
              </span>
              <span className='text-xl font-bold md:text-2xl text-primary'>
                REGISTRATION
              </span>
              <span className='mt-4 '>
                Anyone who lives in the United States can register as a sponsor
                and register his family members and or loved ones living in
                Nigeria.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <PiIntersectLight className='w-16 h-16 text-primary' />
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-lg tracking-wider uppercase font-extrabold dark:text-violet-600'>
                Step 2
              </span>
              <span className='text-xl font-bold md:text-2xl text-primary'>
                LOVED ONES ARE VESTED
              </span>
              <span className='mt-4 '>
                After at least 90 days of waiting period the member becomes
                vested and the sponsor makes sure his or her member&apos;s
                registration fee is taken care of.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <BiCodeAlt className='w-16 h-16 text-primary' />
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-lg tracking-wider uppercase font-extrabold dark:text-violet-600'>
                Step 3
              </span>
              <span className='text-xl font-bold md:text-2xl text-primary'>
                REGISTRATION FEE PAID
              </span>
              <span className='mt-4  '>
                If the member&apos;s registration fees is not received by
                SAGI-NIGERIA, the member is not fully registered and can not be
                covered.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <BsUmbrella className='w-16 h-16 text-primary' />
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-lg tracking-wider uppercase font-extrabold dark:text-violet-600'>
                Step 4
              </span>
              <span className='text-xl font-bold md:text-2xl text-primary'>
                LOVED ONES ARE COVERED
              </span>
              <span className='mt-4 '>
                As soon as the member received his or her matriculation number
                and the member&apos;s registration fee is received by
                SAGI-NIGERIA, the member is covered, but will be able to
                received full payout after one year.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TabsRender() {
  return (
    <>
      <section className=' my-20'>
        <ScrollToTop smooth color='#0891b2' width='40' />
        <div>
          <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
            How it works?
          </h1>
          <div className='w-28 mt-3 h-1 bg-cyan-600 mx-auto mb-20'></div>
        </div>
        <Tabs color='primary' />
      </section>

      <section className='bg-base-200 text-base-content align-element mb-20 '>
        <div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
          <h2 className='text-2xl font-semibold sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='mt-4 mb-8 '>
            Here are a few questions that quickly usually come to mine:
          </p>
          <div className='space-y-4'>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                Is SAGI-NIGERIA the same thing as SAGI?
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 text-primary'>
                No, SAGI and SAGI-NIGERIA are two different and separate
                databases, the first one gathers people living in the United
                States who are willing to be helping with others families&apos;
                funeral expenses knowing that if something happens to them their
                families will receive the same help from others members.
                <br /> SAGI-NIGERIA in the other hand, gathers people living in
                Nigeria who are willing to participate in a SAGIlike program,
                but would be sponsored by people living in the US.
              </p>
            </details>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                How much is the contribution amount from SAGI-NIGERIA when a
                member passes away.
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 text-primary'>
                It really depends on how long the member has been a member; for
                membership with matriculation number, between 0 to 6 months, the
                family receives up to $1000, between 7 t0 12 months the family
                receive $2,000 and beyond 12 months the family receives $10,000
              </p>
            </details>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                Is there any registration fee to become a member.
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 text-primary'>
                It depends on the sponsor&apos;s membership with SAGI. If the
                sponsor is a SAGI member, the registration fee for any of his
                family member is $5, but if the sponsor isn&apos;t a SAGI
                member, his family member&apos;s registration will cost $10.
                <br />
                In any event, the registration fees will be collected after the
                member receives his or her matriculation number.
              </p>
            </details>
            <details className='w-full border rounded-lg'>
              <summary className='px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600'>
                What is another relation between SAGI and SAGI-NIGERIA?
              </summary>
              <p className='px-4 py-6 pt-0 ml-4 -mt-4 text-primary'>
                SAGI-NIGERIA is set up by the same people who set up SAGI, and
                is run the same way. Moreover, a SAGI member who whishes to
                relocate to Nigeria and who do not have a 10 years membership
                with SAGI can register for free with SAGI-NIGERIA.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
