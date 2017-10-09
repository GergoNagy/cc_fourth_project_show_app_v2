import React, { Component } from 'react';
import './style.css'
import Img from 'react-image'
import Button from '../Button'
import Details from './Details'

class ShowList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            select: null
        }

    }

    handleClick(info) {
        console.log('this is:', this);
        console.log('info is:', this.props);
        return (<Details this={this} />)
    }

    buildList() {
        return this.props.list.map(function (listValue) {
            let img = null
            if (listValue.show.image) {
                img = <Img src={listValue.show.image.medium} />
            } else {
                img = <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RlnwzpAqKPdW3vXVpKg_oJZ7u5QHRD672y_Eih0khjPhiRVB' />
            }

            return (
                <Button handleClick={this.handleClick.bind(this)} listValue={listValue} img={img} />
            )
        }.bind(this));
    }

    render() {
        if (!this.props.list) return
        const elements = this.buildList();
        // console.log("elements", elements);
        return (
            <div className='list' id='shows'>
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}

export default ShowList