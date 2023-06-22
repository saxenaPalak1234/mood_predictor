import React,{useState} from "react";
import "./styles.css";


const MOODS = [
  "happy",
  "sad",
  "angry",
  "excited",
  "fearful",
  "disgusted",
  "surprised"
];


function App (){
  const[prediction,setPridiction] = useState('');
  

 const handleClick =()=> {
    const moodIndex = Math.floor(Math.random() * MOODS.length);
    console.log(moodIndex);
    setPridiction(MOODS[moodIndex] );
  }

 
    return (
      <div>
        <h1>Mood Predictor</h1>
        {prediction && (
          <p>
            Mood predictor has predicted that you mood will be
            <b> {prediction} </b>today.
          </p>
        )}
        <button onClick={handleClick}>Predict Mood</button>
      </div>
    );
  }


export default App;
