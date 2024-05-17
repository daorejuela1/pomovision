import './../styles/videolist.css';
import { MdDeleteForever } from 'react-icons/md';
import BodyButton from './BodyButton';

const VideoList = ({videoList, setVideoList}) => {

    const deleteVideo = (id) => {
        let newVideoList = videoList.filter((video) => video.id !== id);
        setVideoList([...newVideoList]);
    };


  return (
    <div className="VideoList">
        <h1>List of Videos</h1>
            <ol>
        {videoList && videoList.map((video) => (
                <li>{video.title} <MdDeleteForever onClick={() => deleteVideo(video.id)}
                className="VideoList__delete"
                /></li>
        ))}
            </ol>
        <BodyButton text="Confirm" path="/" />
    </div>
  );
};

export default VideoList;