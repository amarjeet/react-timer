const React = require('react');

class Controls extends React.Component {

    static get propTypes() {
        return {
            countdownStatus: React.PropTypes.string.isRequired
        };
    }

    render() {
        const {countdownStatus} = this.props;

        const renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="secondary button">Pause</button>
            } else {
                return <button className="primary button">Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="hollow alert button">Clear</button>
            </div>
        );
    }
}

module.exports = Controls;
