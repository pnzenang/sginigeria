Hero2;
// import Testimonials from '../components/Testimonials';
// import Home from './Home';
import ScrollToTop from 'react-scroll-to-top';
// import MonthlyContribution from '../components/MonthlyContribution';
import { Seo } from '../components/Seo';
import Hero2 from '../components/Hero2';
Seo;

const Landing = () => {
  return (
    <section className='my-10 '>
      <Seo title='SAGI' description='Helping people help themselves' />
      <ScrollToTop smooth color='#0891b2' width='40' />
      <Hero2 />
      {/* <MonthlyContribution /> */}
      {/* <Statistics /> */}
      {/* <Mission />
      <Partners /> */}
      {/* <Testimonials /> */}
      {/* <HighLights />
      <Testimonials2 /> */}
    </section>
  );
};
export default Landing;
