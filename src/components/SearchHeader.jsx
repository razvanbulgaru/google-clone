import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center justify-between">
				<Link href={'/'}>
					<Image
						width="120"
						height="40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
						alt="GOOGLE"
					/>
				</Link>
				<div className="flex-1">
					<SearchBox />
				</div>
				<div className="hidden md:inline-flex items-center space-x-2">
					<RiSettings3Line className="header-icon" />
					<TbGridDots className="header-icon" />
				</div>
				<button className="ml-2 bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
					Sign in
				</button>
			</div>
			<SearchHeaderOptions />
		</header>
	);
};

export default SearchHeader;
