const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

class Countdown extends React.Component {

    constructor() {
        super();
        this.state = {
            count          : 0,
            countdownStatus: 'stopped'
        };
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started': {
                    this.startTimer();
                    break;
                }

                case 'stopped': {
                    this.setState({count: 0});
                }

                case 'paused': {
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                }
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount <= 0) {
                // clearInterval(this.timer);
                this.setState({
                    countdownStatus: 'stopped'
                });
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
    }

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    }

    render() {
        const {count, countdownStatus} = this.state;

        const renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
}

module.exports = Countdown;
