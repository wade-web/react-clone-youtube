// src/components/VideoPlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './style/videoplayer.css';
 
const videoData = [
  { id: 1, category: 'music', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Music Video 1', views: '1M', timestamp: '3 days ago', description: 'Description of music video 1' },
  { id: 2, category: 'gaming', url: 'https://www.youtube.com/embed/abc123', title: 'Gaming Video 1', views: '2M', timestamp: '1 week ago', description: 'Description of gaming video 1' },
  // Ajoutez d'autres vidéos ici
]; 

function VideoPlayer() {
  const { videoId } = useParams(); // Récupère l'id de la vidéo à partir de l'URL
  const video = videoData.find((v) => v.id === parseInt(videoId)); // Récupère les détails de la vidéo

  if (!video) {
    return <div>Video Not Found</div>;
  }

  return (
    <div className="videoPlayer">
      <iframe
        className="videoPlayer__iframe"
        src={video.url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
      <div className="videoPlayer__info">
        <h2>{video.title}</h2>
        <p>{video.views} • {video.timestamp}</p>
        <p>{video.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;

