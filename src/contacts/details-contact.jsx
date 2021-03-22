import React, { memo } from 'react';

function DetailsContact() {
    const [firstName, lastName, email, phoneNumber, status] = state;
    return (
        <div>
            <h2> View Details</h2>
            <h3>{firstName} {lastName}</h3>
            <span>{email}</span>
            <br />
            <span>{phoneNumber}</span>
            <br />
            <span>{status}</span>
            <br /><br />
            <button onClick={this.props.history.goBack}>Back</button>
        </div>
    );
}

export default memo(DetailsContact)