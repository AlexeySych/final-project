import React from 'react';

const Statusbar = (props) => (
    <React.Fragment>
    {props.data.loading ? <div className="status status--loading"> Loading </div> : ''}
    {props.data.catching ? <div className="status status--catch"> Catching </div> : ''}
    {props.data.error ? <div className="status status--error"> Error {props.error} </div> : ''}
    </React.Fragment>
);

export default Statusbar;