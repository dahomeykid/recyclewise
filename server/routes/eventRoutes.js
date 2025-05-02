import express from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent, getEventById } from '../controllers/eventController.js';


const router = express.Router();

// Route to get all events
router.route('/').get(getEvents).post(createEvent);

// Route to update and delete a specific event by ID
router.route('/:id').put(updateEvent).delete(deleteEvent);

// Route to get a specific event by ID
router.route('/:id').get(getEventById);

export default router;