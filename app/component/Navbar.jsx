import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-black text-white  border-none lg:border-b-2 lg:border-black lg:pb-2 pb-0 mb-10 flex flex-row justify-between items-center ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black border-4 border-black">
                        <li><a>Home</a></li>
                        <li><a>Programs</a></li>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <h1>E-MANAGEMENT</h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className=" text-lg font-semibold" ><Link href='/'>Home</Link></li>
                    <li className=" text-lg font-semibold" ><a>Programs</a></li>
                    <li className=" text-lg font-semibold" ><a>Dashboard</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 h-10 rounded-full">
                            <Image
                                alt="Tailwind CSS Navbar component"
                                src="/programHubLogo.jpg"
                                width={40}
                                height={40}
                                layout="responsive"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;