import React, { useEffect, useState} from 'react';
import ReactPlayer from 'react-player'
import './App.css';

interface Image{
    numberOfTimesVisible:number,
    visible:boolean,
    limit:number
}

interface Progress{
  played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}

const App=() =>{

  

  const [imageOneVisible, setImageOneVisible]=useState<Image>({visible:false, numberOfTimesVisible:0, limit:1} )
  const [imageTwoVisible, setImageTwoVisible]=useState<Image>({visible:false, numberOfTimesVisible:0, limit:2})
  const [imageThreeVisible, setImageThreeVisible]=useState<Image>({visible:false, numberOfTimesVisible:0, limit:3})
  const [secondsPlayed, setSecondsPlayed]=useState<number>(0)

  useEffect(()=>{
    if(secondsPlayed > 3.5 && secondsPlayed < 8.5){
      if( imageOneVisible.numberOfTimesVisible < imageOneVisible.limit && !imageOneVisible.visible ){
        console.log('here')
      setImageOneVisible(imageOneVisible=>({
        ...imageOneVisible,
        visible:true,
        numberOfTimesVisible: imageOneVisible.numberOfTimesVisible ++
      }))
    }
  }
  if((secondsPlayed < 3.5 || secondsPlayed >8.5) && imageOneVisible.visible ){

    setImageOneVisible(imageOneVisible=>({
      ...imageOneVisible,
      visible:false,
    }))
  
}
    if(secondsPlayed > 6.0 && secondsPlayed < 8.0){
      if( imageTwoVisible.numberOfTimesVisible < imageTwoVisible.limit && !imageTwoVisible.visible){
      setImageTwoVisible(imageTwoVisible=>({
        ...imageTwoVisible,
        visible:true,
        numberOfTimesVisible: imageTwoVisible.numberOfTimesVisible ++
      }))
    }
  }
  if((secondsPlayed < 6.0 || secondsPlayed > 8.0) && imageTwoVisible){
    setImageTwoVisible(imageTwoVisible=>({
      ...imageTwoVisible,
      visible:false,
    }))
  
}
    if(secondsPlayed > 7.0 && secondsPlayed < 8.5){
      if( imageThreeVisible.numberOfTimesVisible < imageThreeVisible.limit && !imageThreeVisible.visible){
      setImageThreeVisible(imageThreeVisible=>({
        ...imageThreeVisible,
        visible:true,
        numberOfTimesVisible: imageThreeVisible.numberOfTimesVisible ++
      }))
    }
  }
  if((secondsPlayed < 7.0 || secondsPlayed > 8.5) && imageThreeVisible){
    setImageThreeVisible(imageThreeVisible=>({
      ...imageThreeVisible,
      visible:false,
    }))
  
}

  },[secondsPlayed])

  const onProgress = (state:Progress) => {
    setSecondsPlayed(state.playedSeconds)
  }

  const renderImage=(imageState:Image, img:JSX.Element)=>{
    if(imageState.visible && imageState.numberOfTimesVisible > imageState.limit){
      return true
    }
  }

  return (
    <div className="App">
      <div className="player">
        <div className={"image-container"}>
        <img className={
         `image-one ${imageOneVisible.visible && 'visible'}`
         } src={process.env.PUBLIC_URL + "/images/image1.png"}/>
        
        <img className={`image-two ${imageTwoVisible.visible && 'visible'}`}  
         src={process.env.PUBLIC_URL + "/images/image2.png"}/>
        
        <img className={
         `image-three ${imageThreeVisible.visible && 'visible'}`
         } 
          src={process.env.PUBLIC_URL + "/images/image3.png"}/>
        </div>
      <ReactPlayer 
      url='video.mp4' 
      controls={true}
      muted={true} 
      width='100%'
      height='70%'
      playing={true}
      onStart={()=>{console.log('start')}}
      onPause={()=>console.log('nay')}
      onProgress={onProgress}
      progressInterval={100}
      />
    </div>
    </div>
  );
}

export default App;
