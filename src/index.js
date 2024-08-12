import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const element = <h1>This is React!!</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// ReactDOM.render(<TestText />, document.getElementById("root"));

// const container = document.getElementById("root");
// const root = ReactDOMClient.createRoot(container);
// root.render(<TestText />);

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

// Create a render function to DOM
function renderDOM(content, id) {
  ReactDOM.createRoot(document.getElementById(id)).render(content);
}

// Show the component on the screen
renderDOM(<App />, "root");
