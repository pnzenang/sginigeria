import {
  // FaLocationDot,
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer2 = () => {
  return (
    <footer className='relative z-1  bg-base-300 lg:pt-6 '>
      <div className='container mx-auto align-element'>
        <div className='w-full '>
          <div className='mb-8 w-full'>
            <h4 className='text-2xl font-medium   xl:text-[28px]'>
              Please feel free to get in touch with us,
            </h4>
          </div>
        </div>
        <div className=' md:flex  container mx-auto align-element'>
          {/* <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 w-full'>
              <div className='flex gap-4 items-center justify-center'>
                <FaLocationDot className='w-8 h-8 text-primary' />
                <div>
                  <h5 className=' text-md font-semibold '>
                    23612 Public House Rd, Clarksburg MD 20871.
                  </h5>
                </div>
              </div>
            </div>
          </div> */}

          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 w-full'>
              <div className='flex gap-4 items-center justify-center'>
                <FaPhone className='w-6 h-6 text-primary' />

                <div>
                  <h5 className=' text-lg font-semibold '>1(804)-214-6390</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 w-full'>
              <div className='flex gap-4 items-center justify-center'>
                <FaEnvelope className='w-6 h-6 text-primary' />
                <div>
                  <h5 className=' text-lg font-semibold    '>
                    info@saginigeria.org
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 w-full'>
              <div className='flex gap-4 items-center justify-center'>
                <FaGlobe className='w-6 h-6 text-primary' />
                <h1 className='  font-semibold '>www.saginigeria.org</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t  py-2 border-base-content align-element '>
        <div className='container mx-auto align-element'>
          <div className='-mx-4 flex flex-wrap items-center  '>
            <div className='w-full px-4 lg:w-3/12 xl:w-1/3'>
              <div className='w-full py-3 text-center lg:text-left'>
                <Logo />
              </div>
            </div>
            <div className='w-full  md:w-3 lg:w-5/12 xl:w-1/3 '>
              <div className='py-3 text-center'>
                <p className=' '>
                  © {new Date().getFullYear()} SAGI-NIGERIA | A SAGI
                  Organization.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-1/3'>
              <div className='w-full py-3'>
                <div className='-mx-3 flex items-center justify-center lg:justify-end'>
                  <Link
                    to='https://www.facebook.com'
                    className='px-3 text-dark-7 hover:text-primary '
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to='https://www.x.com'
                    className='px-3 text-dark-7 hover:text-primary '
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to='https://www.instagram.com'
                    className='px-3 text-dark-7 hover:text-primary '
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to='https://www.linkedin.com'
                    className='px-3 text-base-content hover:text-primary '
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
