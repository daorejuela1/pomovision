import React, { useState, useEffect } from 'react';
import '../styles/videos.css'; // Import the CSS file
import VideoPreview from '../components/VideoPreviewCard';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import { useVideoGrid } from '../hooks/useVideoGrid';

const Videos = () => {
    const [videoList, setVideoList] = useState(() => {
        return JSON.parse(localStorage.getItem('videos')) || []
    });
    useEffect(() => {
        const videos = JSON.parse(localStorage.getItem('videos'));
        if (videos) {
            setVideoList(videos);
        }
    }, []);
    const videoGrid = useVideoGrid();

  return (
    <React.Fragment>
        <VideoList videoList={videoList} setVideoList={setVideoList}/>
        <SearchBar />
        <div className='videos'>
        {videoGrid.map(video =>
        <VideoPreview props={{ videoId: video.id, title: video.title, description: video.description}} videoList={videoList} setVideoList={setVideoList}/>
        )}
        </div>
    </React.Fragment>

  );
};

export default Videos;
