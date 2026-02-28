import React from "react";
import ReactDOM from "react-dom/client";

const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);


// JS React
// const headerElement = React.createElement('h1', {}, 'Hello World!');
// const secondHeaderElement = React.createElement('h2', {}, 'The best UI Framework Ever!');
// const headerSectionElement = React.createElement('header', {className: 'site-heading'}, headerElement, secondHeaderElement)


// JSX React 
const headerSectionJsx = <header className="site-heading">
    <h1>Hello World!</h1>
    <h2>The best Framework Ever!</h2>
</header>


rootReactElement.render(headerSectionJsx);

