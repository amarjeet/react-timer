const React = require('react');

class CountdownForm extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const strSeconds = this.refs.seconds.value;
        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" className="" ref="seconds" placeholder="Enter time in seconds."/>
                    <button className="expanded button">Start</button>
                </form>
            </div>
        );
    }
}

module.exports = CountdownForm;
