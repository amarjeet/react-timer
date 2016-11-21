const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleStatusChange', () => {
        it('should start timer on set change to started', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            // Wait for at least a second
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });

        it('should pause timer on set change to paused', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            // Wait for at least a second
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(10);
                done();
            }, 1001);
        });

        it('should clear timer on set change to stopped', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer/>);

            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            // Wait for at least a second
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            }, 1001);
        });
    });
});
