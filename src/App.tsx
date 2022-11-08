import React from 'react';
import './App.css';
import DrawingArea from './drawingArea';

export const ToolBar = () =>{
    return(
        <div className="toolbar">
            <button className="tb-button">
                <img className="tool" src={require("./images/eraser.png")} alt={"eraser"}/>
            </button>
            <button className="tb-button">
                <img className="tool" src={require("./images/pencil.png")} alt={"pencil"}/>
            </button>
            <button className="tb-button">
                <img className="tool" src={require("./images/rectangle.png")} alt={"rectangle"}/>
            </button>
            <button className="tb-button">
                <img className="tool" src={require("./images/circle.png")} alt={"circle"}/>
            </button>
            <button className="tb-button">
                <img className="tool" src={require("./images/polygon.png")} alt={"polygon"}/>
            </button>

        </div>
    )
}



function App() {
    return (
        <>
            <body>
                <ToolBar/>
            </body>
            <h1> Drawing Area</h1>
            <div className="App drawing-area">
                <DrawingArea/>
            </div>
        </>
    );
}

export default App;