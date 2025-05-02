import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { RecycleWiseProvider } from "./context/RecycleWiseContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
	return (
		<Router>
			<RecycleWiseProvider>
				<Navbar />

				<Routes>
					<Route
						index
						element={<Home />}
					/>
					{/* <Route path="/service" element={<Service />} /> */}
					{/* <Route path="/admin" element={<Admin />} /> */}
					<Route
						path='/leaderboard'
						element={<LeaderBoard />}
					/>
					{/* Add more routes as needed */}
				</Routes>
				<Footer />
			</RecycleWiseProvider>
		</Router>
	);
}

export default App;
