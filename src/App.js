// import logo from './logo.svg';
import './App.css';
import Movies from './Componets/Movies';
import Navbar from './Componets/Navbar';
import { useState } from 'react';

function App(props) {

  const [data , setData] = useState(null);

  const handleDataFromChild = (text) => {
    setData(text);
  };


  
  return (
    <>
      <Navbar title={"Movies Pehchano"}  getText={props.sendText} sendDataToApp ={handleDataFromChild}/>
      {/* <p>{data}</p> */}
      <Movies titleFromApp={data} sendData={handleDataFromChild}/>
    </>

  );
}

export default App;
