import { useState } from "react";
import {QRCodeSVG} from 'qrcode.react';
import { Input, Button } from 'antd';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const HandleClick = () => {
    setQrValue(inputValue);
  };

  return (
    <>
    <div className="App">
      <h1>QR Code Generator</h1>
      <h2>Author: Ali Huseynli</h2>
    </div>

    <div className="Area">

    <div className="textAreabutton">
      <Input  onChange={handleInputChange} style={{ width: '270px' }}/>
      <Button onClick={HandleClick}>Generate</Button>
    </div>
    
    <div className="QRarea">
      <div className="QRcode">
      <QRCodeSVG
          value={qrValue || " "}
          title={"Title for my QR Code"}
          size={245}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          />
      </div>
    </div>
    </div>
    </>
  )
}

export default App;
