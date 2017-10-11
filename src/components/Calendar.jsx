import React from 'react';

class Calendar extends React.Component {



render(){
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: this.props.fav }} />
            {console.log('props in calendar',this.props)}
        </div>
    )}
}

export default Calendar;