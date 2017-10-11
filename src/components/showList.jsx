import React, { Component } from 'react';
import './style.css'
import Img from 'react-image'
import Button from '../Button'
import Details from './Details'
import Modal from 'react-modal';

class ShowList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: [],
            modalIsOpen: false,
            fav:[]
        }

        this.closeModal = this.closeModal.bind(this);

    }


    handleClick(info) {
        this.setState({ modalIsOpen: true });
        //  <Details tvshow={info} />;
         this.setState({show: info});
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
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
                <Button handleClick={this.handleClick.bind(this)} listValue={listValue} img={img} key={listValue.show.id} />
            )
        }.bind(this));
    }

    save(info){
        console.log('data', info)
        this.setState({fav: info});
    }

    render() {
        if (!this.props.list) return
        const elements = this.buildList();

        return (
            <div className='list' id='shows'>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    id= 'customStyles'
                    contentLabel="Example Modal"
                >
                    <Details id='model' info={this.state.show} handler1={this.props.handler}/>
                    {/* <button className="btn btn-default" onClick={this.closeModal}>close</button> */}
                </Modal>
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}

export default ShowList

const customStyles = {

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'light black'
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgb(79, 93, 108)',
        border: '1px solid black',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        width: '80%'
    }
};