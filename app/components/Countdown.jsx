const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

class Countdown extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    static get initialState() {
        return {
            count: 0
        };
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
}

module.exports = Countdown;
