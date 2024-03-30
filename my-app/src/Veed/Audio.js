import React, { useState, useRef } from 'react';
import { AudioVisualizer } from 'react-audio-visualize';

const Audio = () => {
//   const [blob, setBlob] = useState<Blob | null>(null);
//   const visualizerRef = useRef<HTMLCanvasElement>(null)
// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setBlob(file); // Setting the blob from the file input
//     }
//  };
	const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);
    const mediaRecorder = useRef(null);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [videoChunks, setVideoChunks] = useState([]);
    const [recordedVideo, setRecordedVideo] = useState(null);
    const mimeType = "video/webm";
     const getCameraPermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,
                });
                setPermission(true);
                setStream(streamData);
                liveVideoFeed.current.srcObject = streamData;
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

     const startRecording = async () => {
        setRecordingStatus("recording");
        mediaRecorder.current = new MediaRecorder(stream, { mimeType });
        mediaRecorder.current.start();
        let localVideoChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localVideoChunks.push(event.data);
        };
        setVideoChunks(localVideoChunks);
    };
    const stopRecording = () => {
        setPermission(false);
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const videoBlob = new Blob(videoChunks, { type: mimeType });
            const videoUrl = URL.createObjectURL(videoBlob);
            setRecordedVideo(videoUrl);
            setVideoChunks([]);
        };
    };

  return (
    <div>
     
       
      <h2>Video Recorder</h2>
            <main>
                <div className="video-controls">
                    {!permission ? (
                        <button onClick={getCameraPermission} type="button">
                            Get Camera
                        </button>
                    ) : null}
                    {permission && recordingStatus === "inactive" ? (
                        <button onClick={startRecording} type="button">
                            Start Recording
                        </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                     <button onClick={stopRecording} type="button">
                            Stop Recording
                        </button>
                    ) : null}
                </div>
                {recordedVideo ? (
                    <div className="video-player">
                        <video src={recordedVideo} controls></video>
                        <a download href={recordedVideo}>
                            Download Video
                        </a>
                    </div>
                ) : null}
            </main>
        
    </div>
  )
}

export default Audio;