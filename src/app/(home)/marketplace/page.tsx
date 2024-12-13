import GroupProducts from '@/components/group-products';
import HeroSection from '@/components/hero-section';

export default function Marketplace() {
  return (
    <div className='marketplace-page'>
      <div className='animated fadeInLeft'>
        <HeroSection />
      </div>
      <div className='animated fadeInLeft'>
        <GroupProducts />
      </div>
    </div>
  );
}
