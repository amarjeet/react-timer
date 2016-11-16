const React = require('react');
const Navigation = require('Navigation');


const Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
