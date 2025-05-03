import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LeaderBoard from "./pages/LeaderBoard";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthenticatedUser from "./components/AuthenticatedUser";

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Router>
				<Navbar />
				<div className='flex-grow'>
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='/events'
							element={<Events />}
						/>
						<Route
							path='/admin'
							element={<Admin />}
						/>
						<Route
							path='/leaderboard'
							element={<LeaderBoard />}
						/>
						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/register'
							element={<Register />}
						/>
						<Route
							path='/recycling-tips'
							element={<LeaderBoard />}
						/>
						<Route
							path='/me'	
							element={<AuthenticatedUser />}
						/>
						{/* Add more routes as needed */}
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
