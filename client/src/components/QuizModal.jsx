import React, { useState } from "react";

const questions = [
	{
		question: "What is the capital of France?",
		options: ["Madrid", "Berlin", "Paris", "Lisbon"],
		answer: 2,
	},
	{
		question: "Which language is used for web development?",
		options: ["Python", "HTML", "C", "Java"],
		answer: 1,
	},
	{
		question: "What does CSS stand for?",
		options: [
			"Computer Style Sheets",
			"Creative Style System",
			"Cascading Style Sheets",
			"Colorful Style Syntax",
		],
		answer: 2,
	},
];

const QuizModal = ({ onClose }) => {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleAnswer = (index) => {
		const isCorrect = index === questions[currentQ].answer;
		if (isCorrect) setScore((prev) => prev + 1);

		setIsAnimating(true);
		setTimeout(() => {
			if (currentQ < questions.length - 1) {
				setCurrentQ((prev) => prev + 1);
			} else {
				setShowScore(true);
			}
			setIsAnimating(false);
		}, 300);
	};

	const resetQuiz = () => {
		setCurrentQ(0);
		setScore(0);
		setShowScore(false);
		setIsAnimating(false);
	};

	return (
		<div className='fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50'>
			<div
				className='relative bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-6 transition-transform duration-300 transform'
				style={{
					transform: isAnimating ? "translateX(-100%)" : "translateX(0)",
					opacity: isAnimating ? 0 : 1,
				}}
			>
				<button
					className='absolute top-3 right-4 text-gray-500 text-xl font-bold'
					onClick={() => {
						resetQuiz();
						onClose();
					}}
				>
					×
				</button>

				{!showScore ? (
					<>
						<h2 className='text-xl font-semibold text-blue-800 mb-4'>
							Question {currentQ + 1} of {questions.length}
						</h2>
						<p className='text-lg text-gray-800 mb-6'>
							{questions[currentQ].question}
						</p>

						<div className='space-y-3'>
							{questions[currentQ].options.map((option, index) => (
								<button
									key={index}
									className='w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium py-2 px-4 rounded-lg transition duration-200'
									onClick={() => handleAnswer(index)}
								>
									{option}
								</button>
							))}
						</div>
					</>
				) : (
					<div className='text-center'>
						<h2 className='text-2xl font-bold text-blue-800 mb-4'>
							Quiz Completed!
						</h2>
						<p className='text-lg text-gray-700 mb-6'>
							You scored <span className='font-bold'>{score}</span> out of{" "}
							{questions.length}.
						</p>
						<div className='flex justify-center gap-4'>
							<button
								onClick={resetQuiz}
								className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg font-medium'
							>
								Retry
							</button>
							<button
								onClick={() => {
									resetQuiz();
									onClose();
								}}
								className='bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-5 rounded-lg font-medium'
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default QuizModal;
