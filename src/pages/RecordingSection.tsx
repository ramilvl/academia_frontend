import React, { useState } from "react";
import "../styles/RecordingSection.scss";
import ReactPlayer from "react-player";

type Recording = {
  id: string;
  title: string;
  url: string;
  duration: string;
  description?: string;
};

const recordings: Recording[] = [
  {
    id: "1",
    title: "React JS Crash Course 2024",
    url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    duration: "1:33:20",
    description: "FreeCodeCamp beginner course on React JS.",
  },
  {
    id: "2",
    title: "TypeScript Crash Course",
    url: "https://www.youtube.com/watch?v=30LWjhZzg50",
    duration: "1:00:00",
    description: "Traversy Media crash course on TypeScript for beginners.",
  },
  {
    id: "3",
    title: "JavaScript Full Course (2024)",
    url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    duration: "2:12:00",
    description: "FreeCodeCamp full JavaScript tutorial for beginners.",
  },
];



const RecordingSection: React.FC = () => {
  const [selectedRecording, setSelectedRecording] = useState<Recording | null>(recordings[0]);

  return (
    <div className="recording-section">
      <h2>Course Recordings</h2>

      <div className="recording-container">
        <div className="recording-list">
          {recordings.map((recording) => (
            <button
              key={recording.id}
              onClick={() => setSelectedRecording(recording)}
              className={`recording-item ${selectedRecording?.id === recording.id ? "active" : ""}`}
            >
              <h3>{recording.title}</h3>
              <p className="duration">{recording.duration}</p>
              {recording.description && <p className="description">{recording.description}</p>}
            </button>
          ))}
        </div>

        <div className="recording-player">
          {selectedRecording ? (
            <>
              <h3>{selectedRecording.title}</h3>
              <ReactPlayer
                url={selectedRecording.url}
                controls
                width="100%"
                height="auto"
              />
              {selectedRecording.description && (
                <p className="description">{selectedRecording.description}</p>
              )}
            </>
          ) : (
            <p>Select a recording to watch.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordingSection;
