import React from "react";
import ReactDOM from "react-dom/client";

const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const reactElement = React.createElement('h1', {}, 'Hello World!');

rootReactElement.render(reactElement);

