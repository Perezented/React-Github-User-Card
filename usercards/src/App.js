import React from 'react';
import MyCard from './components/MyCard';
import TheirCards from './components/TheirCards';
import './App.css';

import axios from 'axios';

export default class App extends React.Component {
    state = {
        MyData: [],
        FollowersArray: [],
    };

    componentDidMount() {
        axios
            .get('https://api.github.com/users/Perezented')
            .then((res) => {
                console.log(
                    'ratelimit left',
                    res.headers['x-ratelimit-remaining']
                );
                this.setState({ MyData: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get('https://api.github.com/users/Perezented/followers')
            .then((res) => {
                console.log('Followers', res.data);
                this.setState({ FollowersArray: res.data });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Github User Cards in React</h1>
                <MyCard myData={this.state.MyData} />
                <TheirCards theirData={this.state.FollowersArray} />
            </div>
        );
    }
}
