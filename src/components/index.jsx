import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input'
// import '../style/index.css';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showId: []
        }
    }

    search(data) {
        console.log(data)
    }


    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="https://bootswatch.com/superhero/bootstrap.min.css" />
                <div className="jumbotron">
                    <h3 className="text-center">BlaBla</h3>
                    <form id="searchForm">
                        <SearchInput className="search-input" id='searchText' onChange={this.search} />
                    </form>
                </div>
            </div>
        )
    }
}

export default MainPage