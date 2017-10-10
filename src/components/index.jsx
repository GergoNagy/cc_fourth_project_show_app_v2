import React, { Component } from 'react';
import SearchInput from 'react-search-input'
import './style.css'
import ShowList from './showList'
// import '../style/index.css';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shows: [],
            url: 'http://api.tvmaze.com/search/shows?q='
        }

        this.search = this.search.bind(this)
    }

    search(data) {
        let url = this.state.url
        fetch(url + data)
            .then((res) => res.json())
            .then((res) => 
                this.setState({shows: res})
            )
    }

    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="https://bootswatch.com/superhero/bootstrap.min.css" />
                <div className="jumbotron">
                    <h3 className="text-center">Tv show API</h3>
                    <form id="searchForm">
                        <SearchInput className="search-input" id='searchText' onChange={this.search} />
                    </form>
                </div>
                <section>
                    <ShowList list={this.state.shows} />
                </section>
            </div>
        )
    }
}

export default MainPage