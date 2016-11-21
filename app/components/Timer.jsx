const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            count          : 0,
            timerStatus: 'stopped'
        };
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
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
            const newCount = this.state.count + 1;
            if (newCount <= 0) {
                // clearInterval(this.timer);
                this.setState({
                    timerStatus: 'stopped'
                });
            }
            this.setState({
                count: newCount > 0 ? newCount : 0
            });
        }, 1000);
    }

    /**
     * Handle setting of how many seconds to countdown
     * @param seconds - integer value in seconds
     */
    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            timerStatus: 'started'
        });
    }

    handleStatusChange(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    }

    render() {
        const {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}

module.exports = Timer;
