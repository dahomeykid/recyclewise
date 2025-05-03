import { useState } from "react";
import QuizModal from "../components/QuizModal";
import { useRecycleWise } from "../context/RecycleWiseContext"; 

const LeaderBoard = () => {
	const [showModal, setShowModal] = useState(false);
	const {user} = useRecycleWise(); // Assuming you have a context to get user data
	// const { isAuthenticated, user } = useRecycleWise(); // Adjust the import based on your context structure
	// Sample data for users and their scores
	const users = [
		{ id: 1, name: "Alice", score: 150 },
		{ id: 2, name: "Bob", score: 200 },
		{ id: 3, name: "Charlie", score: 120 },
		{ id: 4, name: "David", score: 180 },
		{ id: 5, name: "Eve", score: 220 },
	];
	// Sort users by score descending
	const sortedUsers = [...users].sort((a, b) => b.score - a.score);

	return (
		<>
			{/* Main Content */}

			<div className='min-h-screen bg-gray-100 flex flex-col gap-6 items-center justify-center p-4'>
				<div className='bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6'>
		
					{/* Play the Game Button */}
					{user ? ( // Check if user is authenticated
					<div className='text-center mb-6'>
						<p className='text-2xl text-gray-800 my-4'>Are you eco-savvy ?</p>
						<button
							onClick={() => setShowModal(true)} // turn on the modal
							className='bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition'
						>
							Take the Quiz ?!
						</button>
					</div>
					) : (
					<div className='text-center mb-6'>
						<p className='text-2xl text-gray-800 my-4'>Please login to play the game</p>
						<button
							onClick={() => setShowModal(true)} // turn on the modal
							className='bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition'
						>
							Login
						</button>
					</div>
						)
					}
					</div>
				<div className='bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6'>
					<h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
						🏆 Leaderboard
					</h1>
					<div className='grid grid-cols-12 gap-4 text-left font-medium text-gray-700 border-b border-gray-300 pb-2'>
						<div className='col-span-2'>Rank</div>
						<div className='col-span-6'>Name</div>
						<div className='col-span-4 text-right'>Score</div>
					</div>
					<div className='mt-4 space-y-3'>
						{sortedUsers.map((user, index) => (
							<div
								key={user.id}
								className='grid grid-cols-12 gap-4 items-center bg-gray-50 hover:bg-gray-100 transition rounded-xl px-4 py-3'
							>
								<div className='col-span-2 font-semibold text-indigo-600'>
									#{index + 1}
								</div>
								<div className='col-span-6 text-gray-900'>{user.name}</div>
								<div className='col-span-4 text-right font-bold text-gray-800'>
									{user.score}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{showModal && <QuizModal onClose={() => setShowModal(false)} />}
		</>
	);
};

export default LeaderBoard;
