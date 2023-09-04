import ReactPlayer from "react-player";

function VideoPlayer (props) {

    return (
        <div>
        <h1>Rattori videoita!</h1>
        <ReactPlayer  className="video" url='https://www.youtube.com/watch?v=4jH3SKuhpjw' controls={true} />
        <ReactPlayer  className="video" url='https://www.youtube.com/watch?v=SNKWRB1-5pA&t=542s' controls={true} />
        <ReactPlayer  className="video" url='https://www.youtube.com/watch?v=LraJL2T2fxw' controls={true} />
        </div>
    )
}

export default VideoPlayer