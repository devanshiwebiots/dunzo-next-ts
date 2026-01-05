import { ImagePath } from '@/Constant/constant';
import Image from 'next/image';
import React from 'react'

export const ActivityLine=()=> {
    const imageNumbers = [5, 6, 3];
    
    return (
        <li className="mt-0 d-flex">
            <div className="activity-line"></div>
            <Image width={40} height={40} src={`${ImagePath}/dashboard-2/user/5.png`} alt="" unoptimized/>
            <div className="ms-2"><span>{'2hrs Ago'}</span>
                <p>{"Today, I'm very happy about myself, because I realized my dreams."}</p>
                <div className="recent-images">
                    <ul>
                        {imageNumbers.map((item, index) => (
                            <li key={index}>
                                <div className="recent-img-wrap">
                                    <Image priority width={38} height={38} src={`${ImagePath}/dashboard-2/product/${item}.png`} alt="" unoptimized/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}
