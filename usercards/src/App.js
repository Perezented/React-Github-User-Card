import React from 'react';
import MyCard from './components/MyCard';
import './App.css';

export default class App extends React.Component {
    state = {
        MyData: [],
        FollowersData: [],
    };

    componentDidMount() {}

    render() {
        return (
            <div className="App">
                <h1>Github User Cards in React</h1>
                <MyCard />
            </div>
        );
    }
}
