import React from 'react';

export default class TheirCards extends React.Component {
    render() {
        console.log(this.props.theirData);
        const theirStuff = this.props.theirData;
        return (
            <>
                {theirStuff.map((follower, index) => {
                    return (
                        <section key={index}>
                            <h3>{follower.login}</h3>
                        </section>
                    );
                })}
            </>
        );
    }
}
