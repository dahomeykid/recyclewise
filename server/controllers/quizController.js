import { log } from 'console';
import fs from 'fs';
import path from 'path';


export const getQuiz = (req, res) => {
  const quizFilePath = path.join(__dirname, '../utils/quiz.json'); // Adjust the path as necessary
  log('Quiz file path:', quizFilePath); // Log the path for debugging
  fs.readFile(quizFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading quiz file:', err);
      return res.status(500).json({ error: 'Failed to read quiz data' });
    }
    try {
      const quizData = JSON.parse(data);
      res.status(200).json(quizData);
    } catch (parseError) {
      console.error('Error parsing quiz data:', parseError);
      res.status(500).json({ error: 'Failed to parse quiz data' });
    }
  });
}