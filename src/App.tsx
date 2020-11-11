import React, { SetStateAction, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import { Controls } from "./components/controls";
import { Image } from "./components/image";

interface Image {
  numberOfTimesVisible: number;
  visible: boolean;
  limit: number;
}

interface Progress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const ImageOneShows = 3.5;
const ImageTwoShows = 6.0;
const ImageThreeShows = 7.0;
const ImageOneHides = 8.5;
const ImageTwoHides = 8.0;
const ImageThreeHides = 8.5;


const App = () => {
  const [imageOneVisible, setImageOneVisible] = useState<Image>({
    visible: false,
    numberOfTimesVisible: 0,
    limit: 1,
  });
  const [imageTwoVisible, setImageTwoVisible] = useState<Image>({
    visible: false,
    numberOfTimesVisible: 0,
    limit: 2,
  });
  const [imageThreeVisible, setImageThreeVisible] = useState<Image>({
    visible: false,
    numberOfTimesVisible: 0,
    limit: 3,
  });
  const [secondsPlayed, setSecondsPlayed] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  const setImageVisibility = (
    isVisible:boolean, 
    callback: (value: React.SetStateAction<Image>) => void, 
    image:Image
    ) => {
    if (
       image.limit >=  image.numberOfTimesVisible &&
       isVisible !== image.visible
    ){
      
    const increment = isVisible ? 1 : 0;
    const newImage:Image = {
      numberOfTimesVisible: image.numberOfTimesVisible + increment,
      visible: isVisible,
      limit: image.limit

    }
    callback(newImage)
  }
  }

  useEffect(() => {
    if (secondsPlayed > ImageOneShows == secondsPlayed < ImageOneHides) {
      setImageVisibility(true, (input) => setImageOneVisible(input) , imageOneVisible)
    }
    if (
      (secondsPlayed < ImageOneShows || secondsPlayed > ImageOneHides) &&
      imageOneVisible.visible
    ) {
      setImageVisibility(false, (input) => setImageOneVisible(input), imageOneVisible)
    }
    if (secondsPlayed > ImageTwoShows == secondsPlayed < ImageTwoHides) {
        setImageVisibility(true, (input) => setImageTwoVisible(input), imageTwoVisible)   
    }
    if ((secondsPlayed < ImageTwoShows || secondsPlayed > ImageTwoHides) && imageTwoVisible) {
      setImageVisibility(false, (input) => setImageTwoVisible(input), imageTwoVisible)
    }
    if (secondsPlayed > ImageThreeShows == secondsPlayed < ImageThreeHides) {
      setImageVisibility(true, (input) => setImageThreeVisible(input), imageThreeVisible)
    }
    if ((secondsPlayed < ImageThreeShows || secondsPlayed > ImageThreeHides) && imageThreeVisible) {
      setImageVisibility(false, (input) => setImageThreeVisible(input), imageThreeVisible)
    }
  }, [secondsPlayed]);

  const onProgress = (state: Progress) => {
    setSecondsPlayed(state.playedSeconds);
  };

  return (
    <div className="App">
      <div className={"image-container"}>
      <Image
        src="/images/image1.png"
        className="image-one"
        visible={imageOneVisible.visible}
        />
        <Image
        src="/images/image2.png"
        className="image-two"
        visible={imageTwoVisible.visible}
        />
         <Image
        src="/images/image3.png"
        className="image-three"
        visible={imageThreeVisible.visible}
        />    
      </div>
        <ReactPlayer
          url="video.mp4"
          muted={true}
          playing={playing}
          onProgress={onProgress}
          progressInterval={100}
          onEnded={() => {
            setPlaying(false);
          }}
        />
      <Controls playing={playing} play={() => setPlaying(true)}  pause={() => setPlaying(false)}/>
    </div>
  );
};

export default App;
