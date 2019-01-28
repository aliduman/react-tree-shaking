import React from 'react';
import basketBack from './basket-back.svg';
import './basket.scss';

class Basket extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={'basket'}>
                    <img src={basketBack} alt={'Basket'} width={'166'} height={'201'}/>
                </div>
            </div>
        );
    }
}

export default Basket;