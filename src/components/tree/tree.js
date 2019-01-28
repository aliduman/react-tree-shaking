import React from 'react';
import tree from './apple-tree.svg'
import './tree.scss';

class Tree extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className={'tree '+ (this.props.shakingState ? 'show' : 'hidden')} >
                    <img src={tree} alt={'Tree'} width={'482'} height={'560'} onClick={this.props.onClickValue}/>
                </div>
            </div>
        );
    }
}

export default Tree;