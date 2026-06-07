


const Transcript = require('../models/Transcript');
const {YoutubeTranscript} = require('youtube-transcript');

const getTranscript = async(req, res) =>{
    try{
        const { videoId } =req.params;

        const existing = await Transcript.findOne({ videoId });

        if(existing) {
            return res.status(200).json(existing)
        }

        const transcriptData = await YoutubeTranscript.fetchTranscript(videoId)
        const fullText = transcriptData.map(s => s.text).join(' ')

        const newTranscript = await Transcript.create({
            videoId,
            segments: transcriptData,
            fullText
        })

    }catch(error){
        res.status(500).json({ message: "Failed to fetch/save transcript", error: error.message });
    }
}

module.exports = {
    getTranscript
}