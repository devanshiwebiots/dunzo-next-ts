import { ImagePath } from '@/Constant/constant';
import Image from 'next/image';

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image priority width={52} height={52} className= 'me-3 rounded-circle' src={`${ImagePath}/user/user.png`} alt= "Image"  unoptimized/>
      </div>
      <div className="flex-grow-1">
        <h3>MARK JENCO</h3>
        <p className='text-truncate'>Markjecno@gmail.com</p>
      </div>
    </div>
  );
};

export default HeaderProfile; 