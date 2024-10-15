// // src/components/VideoCard.js
// import React from 'react';
// import './style/videocard.css';
// import { FaCheckCircle } from 'react-icons/fa';

// function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
//   return (
//     <div className="videoCard">
//       <img className="videoCard__thumbnail" src={image} alt={title} />
//       <div className="videoCard__info">
//         <img className="videoCard__avatar" src={channelImage} alt={channel} />
//         <div className="videoCard__text">
//           <h4>{title}</h4>
//           <p>
//             {channel} <FaCheckCircle className="videoCard__verified" />
//           </p>
//           <p>
//             {views} • {timestamp}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoCard;
// src/components/VideoCard.js
import React from 'react';
import './style/videocard.css';
import { FaCheckCircle } from 'react-icons/fa';

function VideoCard({ image, title, channel, views, timestamp, channelImage, onClick }) {
  return (
    <div className="videoCard" onClick={onClick}>
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <img className="videoCard__avatar" src={channelImage} alt={channel} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>
            {channel} <FaCheckCircle className="videoCard__verified" />
          </p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
