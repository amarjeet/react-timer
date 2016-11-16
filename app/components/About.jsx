const React = require('react');

// const About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

const About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Weather example application in React. Based on Udemy course.</p>
            <p>A few tools used were:</p>
            <ul>
                <li><a href="https://facebook.github.io/react" target="_blank">React</a></li>
                <li><a href="https://www.heroku.com" target="_blank">Heroku</a></li>
                <li><a href="http://openweathermap.org" target="_blank">Open Weather Map</a></li>
            </ul>
        </div>
    );
};

module.exports = About;
