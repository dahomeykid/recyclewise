import express from 'express';

import {getLeaderboard, updateLeaderboard} from '../controllers/leaderboardController.js';


const router = express.Router();

// Route to get the leaderboard
router.route('/').get(getLeaderboard).put(updateLeaderboard);

export default router;