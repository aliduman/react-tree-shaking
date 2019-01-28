import React from "react";
import './app.scss'
import Tree from "./tree/tree";
import Apple from "./apple/apple";
import Basket from "./basket/basket";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appleCount: 0,
            startState: false,
            shakingState: false
        };

        // Tree component click event tetiklendiğinde bu function çalışır.
        this.handleTreeValue = e => {
            this.setState({startState: false});
            if(this.state.startState){
                this.setState({shakingState: true});
                this.setState({startState: false});
                this.treeShaking();
            }else{
                alert('Başla butonuna tıklayın...');
            }
        };



    }

    //Bu function Elmaların 3 saniye sonra düşmelerini sağlıyor.
    treeShaking() {
        let appleCount = this.state.appleCount;
        setTimeout(() => {
            let appleInt = setInterval(() => {
                appleCount++;
                this.setState({appleCount: appleCount});
                console.log(this.state.appleCount);
                if (appleCount === 3) {
                    clearInterval(appleInt);
                    this.setState({startState: false});
                }
            }, 1000);
        }, 3000)
    }

    start() {
        this.setState({startState: true, appleCount: 0, shakingState:false});
        console.log(this.state);
    }

    render() {
        return (
            <div className={'container'}>
                <h1>TreeShaking</h1>
                <Tree shakingState={this.state.shakingState} onClickValue={this.handleTreeValue}/>
                <Apple shakingState={this.state.startState} appleCount={this.state.appleCount}/>
                <Basket/>
                <button onClick={() => {
                    this.start();
                }}>Toplamaya Başla
                </button>
            </div>
        );
    }
}

export default App;
