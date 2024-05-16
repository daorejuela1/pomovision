import React from 'react';
import '../styles/videos.css'; // Import the CSS file
import VideoPreview from '../components/VideoPreviewCard';
import SearchBar from '../components/SearchBar';
import { MockData } from '../data';

const Videos = () => {
  return (
    <React.Fragment>
        <SearchBar />
        <div className='videos'>
        {MockData["videos"].map(video =>
        <VideoPreview props={{ videoId: video.id, title: video.title, description: video.description}} />
        )}
        </div>
    </React.Fragment>

  );
};

export default Videos;
