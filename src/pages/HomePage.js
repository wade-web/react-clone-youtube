
import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import VideoCard from '../components/VideoCard';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

// Exemple de données vidéo
const videoData = [
  { id: 1, category: 'music', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Music Video 1', views: '1M', timestamp: '3 days ago', description: 'Description of music video 1', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg', channel: 'Music Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 2, category: 'gaming', url: 'https://www.youtube.com/embed/abc123', title: 'Gaming Video 1', views: '2M', timestamp: '1 week ago', description: 'Description of gaming video 1', image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg', channel: 'Gaming Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 3, category: 'programming', url: 'https://www.youtube.com/embed/def456', title: 'Education Video 1', views: '500K', timestamp: '2 weeks ago', description: 'Description of education video 1', image: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg', channel: 'Education Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 4, category: 'music', url: 'https://www.youtube.com/embed/ghi789', title: 'Comedy Video 1', views: '3M', timestamp: '1 month ago', description: 'Description of comedy video 1', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg', channel: 'Comedy Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 5, category: 'source-code', url: 'https://www.youtube.com/embed/jkl012', title: 'News Video 1', views: '800K', timestamp: '3 days ago', description: 'Description of news video 1', image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg', channel: 'News Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 6, category: 'programming', url: 'https://www.youtube.com/embed/mno345', title: 'Sports Video 1', views: '1.5M', timestamp: '1 week ago', description: 'Description of sports video 1', image: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg', channel: 'Sports Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 7, category: 'travel', url: 'https://www.youtube.com/embed/pqr678', title: 'Travel Video 1', views: '2.5M', timestamp: '2 weeks ago', description: 'Description of travel video 1', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg', channel: 'Travel Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 8, category: 'source-code', url: 'https://www.youtube.com/embed/stu901', title: 'Technology Video 1', views: '1.2M', timestamp: '1 month ago', description: 'Description of technology video 1', image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg', channel: 'Technology Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 9, category: 'music', url: 'https://www.youtube.com/embed/vwx234', title: 'Lifestyle Video 1', views: '900K', timestamp: '3 days ago', description: 'Description of lifestyle video 1', image: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg', channel: 'Lifestyle Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 10, category: 'documentary', url: 'https://www.youtube.com/embed/yzb567', title: 'Documentary Video 1', views: '1.8M', timestamp: '1 week ago', description: 'Description of documentary video 1', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg', channel: 'Documentary Channel', channelImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
];




function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate(); // Hook pour la navigation

  const filteredVideos = videoData.filter(
    (video) => selectedCategory === 'all' || video.category === selectedCategory
  );

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="homePage">
      {/* Onglets pour les catégories */}
      <Tabs onCategorySelect={setSelectedCategory} />

      {/* Affichage des vidéos filtrées */}
      <div className="videoGrid">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            onClick={() => handleVideoClick(video.id)} // Gérer le clic pour rediriger vers VideoPlayer
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
