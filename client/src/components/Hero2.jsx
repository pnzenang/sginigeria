// import hero1 from '../assets/images/worry.jpg';
// import hero2 from '../assets/images/prepared.jpg';
// import hero3 from '../assets/images/together.jpg';
// import hero4 from '../assets/images/victory.jpg';

const carouselImages2 = [
  'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1752211702/worry_b7v7fg.jpg',
  ' https://res.cloudinary.com/dp8tkb7hq/image/upload/v1752212375/prepared_dfti07.jpg',
  'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1752212376/together_rnuus1.jpg',

  'https://res.cloudinary.com/dp8tkb7hq/image/upload/v1752211702/victory_iqimhu.jpg',
];

// const carouselImages = [hero1, hero2, hero3, hero4];

const Hero2 = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-10 items-center mt-20 mb-20 align-element bg-base-200'>
      <div className='mt-10 '>
        <p className='max-w-2xl text-2xl font-bold  sm:text-4xl tracking-wider '>
          Register your loved ones living in NIGERIA with{' '}
          <span className=' uppercase text-primary font-extrabold tracking-wide'>
            sagi-nigeria
          </span>
          {', '}the SAGI organization set up for families living in Nigeria.
        </p>
        <p className='py-10  text-body-color hover:text-primary leading-loose'>
          By sponsoring your loved ones living in Nigeria with
          <span className='font-semibold'> SAGI-NIGERIA</span>, you make their
          eventual passing a SAGI problem, the whole{' '}
          <span className='font-semibold'> SAGI-NIGERIA</span> community will
          come together to support you in the trying time.
          <br /> At<span className='font-semibold'> SAGI-NIGERIA</span>, we
          mimic the african solidarity, making one family&apos;s problem the
          problem of the whole community. Making it a little easier for any of
          us, to face up to the adversity of financially taking care of expenses
          related to the funeral of a loved one.
        </p>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages2.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                alt=''
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero2;
