import React from "react";
import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			{/* Header Section */}
			<header className='bg-[#F7F0E5] text-black py-6'>
				<div className='container mx-auto px-4 flex justify-between items-center'>
					<h1 className='text-3xl font-bold'>
						<Link to="/">
						<img
							src={logo}
							alt='logo recycle wise'
						/>
						</Link  >
					</h1>
					<nav>
						<ul className='flex space-x-6'>
							<li>
								<a
									href='#about'
									className='hover:underline'
								>
									About-Us
								</a>
							</li>
							<li>
								<Link
									to='/events'
									className='hover:underline'
								>
									Events
								</Link>
							</li>
							<li>
								<a
									href='#contact'
									className='hover:underline'
								>
									Contact
								</a>
							</li>
							<li>
								<Link
									to='/login'
									className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'
								>
									Sign In
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
