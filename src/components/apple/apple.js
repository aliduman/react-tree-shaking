import React from 'react';
import './apple.scss'
import apple from './apple.svg'
import basketFront from "./basket-front.svg";

class Apple extends React.Component {
    constructor(props) {
        super(props);

        this.appleArr = [apple, apple, apple];
        this.state = {
            downAppleState: false
        };
    }

    appleState() {
        if (this.props.appleCount >= 1) {
            setTimeout(() => {
                this.setState({
                    downAppleState: true
                });
            }, 7000);
        }
    }

    render() {
        return (
            <div>
                <div className={'basket-front'}>
                    {this.appleState()}
                    <img src={basketFront} alt={'Basket'} width={'166'} height={'117'}/>
                </div>
                <div>
                    {
                        this.appleArr.map((item, index) => {
                            return (
                                <div
                                    className={'apple appleDownAnimate ' + (this.props.appleCount >= 1 ? 'down' : '') + (this.state.downAppleState ? ' done' : '')}>
                                    <img src={item} alt={'Tree'} width={'43'} height={'46'} key={index}/>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Apple;