
const express = require('express')
const { getTranscript } = require('../controllers/transcriptController')
const { authMiddleware } = require('../middleware/authMiddleware')
const router = express.Router();

// Access via: GET /api/transcripts/:videoId
router.get('/:videoId', authMiddleware, getTranscript);

module.exports = router;