'use strict';

const element = <h1>Hello, world!</h1>;

ReactDOM.render(
    element,
    document.getElementById('react-dom')
);


function tick() {
    const time = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(time, document.getElementById('root'));
}

setInterval(tick, 1000);
