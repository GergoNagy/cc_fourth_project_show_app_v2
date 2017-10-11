import React, { Component } from 'react';
import SearchInput from 'react-search-input'
import './style.css'
import ShowList from './showList'
import Calendar from './Calendar'
import ReactHtmlParser from 'react-html-parser';
// import '../style/index.css';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shows: [],
            url: 'http://api.tvmaze.com/search/shows?q=',
            fav:[]
        }

        this.search = this.search.bind(this)
        this.handler = this.handler.bind(this)
    }

    search(data) {
        let url = this.state.url
        fetch(url + data)
            .then((res) => res.json())
            .then((res) => 
                this.setState({shows: res})
            )
    }

    handler(e) {
        if (e.info){
        console.log('what e', e.info.name)
        let favArray = this.state.fav.slice();
        favArray.push(e.info.name + ' is running on ' + e.info.schedule.days + ' at ' + e.info.schedule.time + '<br/>'); 
        this.setState({ fav: favArray })
        }
    }


    render() {
        return (
            <div className="container">
            {console.log('index', this.props)}
                <link rel="stylesheet" href="https://bootswatch.com/superhero/bootstrap.min.css" />
                <div className="jumbotron">
                    <h3 className="text-center">Tv show API</h3>
                    <form id="searchForm">
                        <SearchInput className="search-input" id='searchText' onChange={this.search} />
                    </form>
                </div>
                <section>
                    <Calendar fav={this.state.fav}/>
                    <ShowList list={this.state.shows} handler={this.handler} />
                </section>
            </div>
        )
    }
}

export default MainPage