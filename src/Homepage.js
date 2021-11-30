import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Homepage = (props) => {
    if (!isLoaded(props.homepage)) {
        return <div>Loading...</div>;
    }

    const viewers =
        Object.keys(props.homepage).map((deckId) => {
            return (
                <div key={deckId}>
                    <Link to={`/viewer/${deckId}`}>{props.homepage[deckId].name}</Link>
                </div>
            );
        });

    return (
        <div>
            <h1>Homepage</h1>
            <h2>Card Editor</h2>
            <Link to='/editor'> Create a deck </Link>
            <h2>View a deck</h2>
            {viewers}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { homepage: state.firebase.data.homepage };
};

export default compose(
    firebaseConnect(['/homepage']),
    connect(mapStateToProps)
)(Homepage);