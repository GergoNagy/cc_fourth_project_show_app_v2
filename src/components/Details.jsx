import React from 'react'

class Details extends React.Component {
    constructor(props){
        super(props)
    }
    render (){
        return (
            <div>
                <p>details {console.log(this.props)}</p>
            </div>
        )
    }

}

export default Details