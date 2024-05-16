import React, { useState, useEffect} from 'react';
import '../styles/videopreviewcard.css';


const VideoPreviewCard = ({props}) => {
  const { videoId, title, description } = props;
  console.log(videoId);
    const [videoList, setVideoList] = useState([]);
  const handleSubmit = event => {
    event.preventDefault(); 
    let newVideoItem ={
      id: videoId,
      startTimeSeconds: 0,
    };
    setVideoList([...videoList, newVideoItem]);
  };

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videoList));
}, [videoList]);


  return (
    <form className="VideoPreviewCard" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title={title} frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <p>{description}</p>
        <button className="VideoPreviewCard__button">
          Add to the Queue
        </button>
    </form>
  );
};

export default VideoPreviewCard;