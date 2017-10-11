import React from 'react'
import Img from 'react-image'
import Calendar from './Calendar'
import ReactHtmlParser from 'react-html-parser';


class Details extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: [],
            favShows: []
        }
    }

    save(data) {
        this.setState({ favShows: this.props })
        console.log('fav', this.props);
        // handler1 = { this.props.handler1 }
        this.send()
    }

    send() {
        let show = this.state.favShows
        this.props.handler1(show)
    }
    
    render() {
        let img = null
        if (this.props.info.image) {
            img = <Img src={this.props.info.image.original} />
        }
        if (!this.props.info) return null
        
        return (
            <div className='box'>
                <div className="row">
                    <div className="col-md-4">
                        {img}
                    </div>
                        <div className="col-md-8">
                        <h2>{this.props.info.name}</h2>
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Genre:</strong> {this.props.info.genres}</li>
                                <li className="list-group-item"><strong>Released:</strong> {this.props.info.premiered}</li>
                                <li className="list-group-item"><strong>Status:</strong> {this.props.info.status}</li>
                                <li className="list-group-item"><strong>Running:</strong> {this.props.info.schedule.days} at {this.props.info.schedule.time} </li>
                                <li className="list-group-item"><strong>IMDB Rating:</strong> {this.props.info.rating.average}</li>
                                <li className="list-group-item"><strong>Language:</strong> {this.props.info.language}</li>
                                <li className="list-group-item"><strong>Official Site:</strong> {this.props.info.officialSite}</li>
                                <li className="list-group-item"><strong>Official Site:</strong> {this.props.info.episodes}</li>
                            </ul>
                        </div>
                </div>
                    <div className="row">
                        <div className="well">
                            <h3>Plot</h3>
                            <div dangerouslySetInnerHTML={{ __html: this.props.info.summary }} />
                        </div>
                        <button className="btn btn-primary" onClick={this.save.bind(this) } >Save</button>
                    </div>
            </div>
                        )
    }

};

export default Details