/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
	const router = useRouter();
	const [input, setInput] = useState('');
	const [randomSearchLoading, setRandomSearchLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!input.trim()) return;
		router.push(`/search/web?searchTerm=${input}`);
	};

	const randomSearch = async () => {
		setRandomSearchLoading(true);
		const res = await fetch('https://random-word-api.herokuapp.com/word')
			.then((res) => res.json())
			.then((data) => data[0]);

		if (!res) return;
		router.push(`/search/web?searchTerm=${res}`);
		setRandomSearchLoading(false);
	};

	return (
		<>
			<form
				className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow  focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
				onSubmit={handleSubmit}
			>
				<AiOutlineSearch className="text-xl text-gray-500 mr-3" />
				<input
					type="text"
					className="flex-grow focus:outline-none"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<BsFillMicFill className="text-lg" />
			</form>
			<div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center mt-8">
				<button onClick={handleSubmit} className="btn">
					Google Search
				</button>

				<button
					onClick={randomSearch}
					className="btn flex items-center justify-center disabled:opacity-80"
					disabled={randomSearchLoading}
				>
					{randomSearchLoading ? (
						<img
							src="spinner.svg"
							alt="loading..."
							className="h-6"
						></img>
					) : (
						'I Am Feeling Lucky'
					)}
				</button>
			</div>
		</>
	);
};

export default HomeSearch;
