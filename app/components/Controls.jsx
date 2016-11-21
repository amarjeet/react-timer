const React = require('react');

class Controls extends React.Component {

    constructor() {
        super();
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    static get propTypes() {
        return {
            countdownStatus: React.PropTypes.string.isRequired,
            onStatusChange: React.PropTypes.func.isRequired
        };
    }

    onStatusChange(newStatus) {
        // Note: A curried function is returned --
        return () => {
            this.props.onStatusChange(newStatus);
        };
    }

    render() {
        const {countdownStatus} = this.props;

        const renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="secondary button" onClick={this.onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="primary button" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="hollow alert button" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
}

module.exports = Controls;
