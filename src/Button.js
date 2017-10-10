import React from 'react';


const Button = (props) => {


    return (
        <div className="col-md-3">
            <div className="well text-center">
                {props.img}
                <h5>{props.listValue.show.name}</h5>
                <button
                    key={props.listValue.show.id}
                    className="btn btn-primary"
                    onClick={() => props.handleClick(props.listValue.show)}>Details</button>
            </div>
        </div>
    )
}

export default Button;

