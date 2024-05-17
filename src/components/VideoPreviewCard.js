import React, {useEffect} from 'react';
import '../styles/videopreviewcard.css';


const VideoPreviewCard = ({props, videoList, setVideoList}) => {
  const { videoId, title, description } = props;

  const handleSubmit = event => {
    event.preventDefault();
    let newVideoItem ={
      id: videoId,
      title: title,
      startTimeSeconds: 0,
    };
    if (!videoList.some(item => item.id === newVideoItem.id)) {
      setVideoList([...videoList, newVideoItem]);
    }
  };

  useEffect(() => {
      localStorage.setItem('videos', JSON.stringify(videoList));
}, [videoList]);


  return (
    <form className="VideoPreviewCard" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      <p>{description}</p>
        <button className="VideoPreviewCard__button">
          Add to the Queue
        </button>
    </form>
  );
};

export default VideoPreviewCard;