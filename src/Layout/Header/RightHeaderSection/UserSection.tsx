"use client";
import { Href, ImagePath } from "@/Constant/constant";
import { UserListData } from "@/Data/Layout/LayoutData";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";

export const UserSection = () => {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut();
  };
  return (
    <li className="profile-nav onhover-dropdown p-0">
      <div className="d-flex align-items-center profile-media">
        <Image priority width={40} height={40} className="b-r-10 img-40 img-fluid" src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt="user" />
        <div className='flex-grow-1'>
          <span>{session?.user?.email || 'Helen Walter'}</span>
          <p className='mb-0'>{session?.user?.name || 'Helen Walter'}<i className="middle fa fa-angle-down" /></p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {UserListData.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.icon}<span>{item.title}</span></Link>
          </li>
        ))}
        <li onClick={handleLogout}>
          <Link href={Href}><LogOut /><span>Log Out</span></Link>
        </li>
      </ul>
    </li>
  );
};
