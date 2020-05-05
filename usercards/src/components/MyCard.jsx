import React from 'react';

import axios from 'axios';

export default class MyCard extends React.Component {
    render() {
        console.log(this.props.myData);
        const myStuff = this.props.myData;
        return (
            <section>
                <h2>{this.props.myData.login}</h2>
                <h3>{this.props.myData.name}</h3>
                <p>{myStuff.location}</p>
                <p>{myStuff.bio}</p>
                <div>
                    <h5>Total Public Repos: {myStuff.public_repos}</h5>
                    <h5>Total Followers: {myStuff.followers}</h5>
                    <h5>Total Following: {myStuff.following}</h5>
                </div>
                <h6>GitHub provided this info here: {myStuff.url}</h6>
            </section>
        );
    }
}
