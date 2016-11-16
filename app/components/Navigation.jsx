const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        const location = this.refs.search.value;
        const encodedLocation = encodeURIComponent(this.refs.search.value);
        if (location && location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = `#/?location=${encodedLocation}`;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Amarjeet Singh</li>
                        <li><Link to="/about" activeClassName="active-link">About this application</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
