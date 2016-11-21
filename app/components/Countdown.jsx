const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

class Countdown extends React.Component {

    constructor() {
        super();
        this.state = {
            count          : 0,
            countdownStatus: 'stopped'
        };
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started': {
                    this.startTimer();
                    break;
                }
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount <= 0) {
                clearInterval(this.timer);
            }
            this.setState({
                count: newCount > 0 ? newCount : 0
            });
        }, 1000);
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });

        // this.setState((prevState, props) => (
        //     prevState = {
        //         count          : seconds,
        //         countdownStatus: 'started'
        //     }));
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
