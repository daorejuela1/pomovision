import React, {  useEffect, useState } from 'react';
import '../styles/video.css';
import YouTube from 'react-youtube';
const Video = () => {
    const [videoList, setVideoList] = useState(() => {
        return JSON.parse(localStorage.getItem('videos')) || []
    });

    useEffect(() => {
        const videos = JSON.parse(localStorage.getItem('videos'));
        if (videos) {
            setVideoList(videos);
        }
    }, []);

    useEffect(() => {
        if(videoList) {
        localStorage.setItem('videos', JSON.stringify(videoList));
        }
    }, [videoList]);


    const deleteVideo = (id) => {
        let newVideos = videoList.filter((video) => video.id !== id);
        setVideoList([...newVideos]);
    };


    const updateVideo = (index, newTimeStamp) => {
        video = videoList[index];
        video.startTimeSeconds = newTimeStamp;
        setVideoList([...videoList]);
    };

    let { video, title } = {};
    if (videoList && videoList.length > 0) {
        video = videoList[0];
        title = video.title;
    } else {
        title = "Add some videos in your Queue";
    }

    const onPlayerReady = (event) => {
        const player = event.target;
        player.loadVideoById(video.id, video.startTimeSeconds);
        player.pauseVideo();
      };
    
      const options = {
        playerVars: {
          autoplay: 1,
        },
      };

    function onPlayerStateChange(event) {
        const player = event.target;
        let intervalId;
        player.playVideo();
            if (event.data === window.YT.PlayerState.PLAYING) {

                intervalId = setInterval(() => {
                    const currentTime = player.getCurrentTime();
                    updateVideo(0, currentTime);
                }, 1000); // Polling interval in milliseconds (every second)
            } else {
                clearInterval(intervalId);
                console.log("Video stopped or paused" + intervalId);
            }
        }


    return (
        <div className='Video'>
            <h1>{title}</h1>
            {videoList.length > 0 ? (
                <YouTube
                    opts={options}
                    onReady={onPlayerReady}
                    onEnd={() => deleteVideo(video.id)}
                    onStateChange={onPlayerStateChange}
                  />
            ) : (
                "Add some videos in your Queue"
            )}
        </div>
    );
};

export default Video;
