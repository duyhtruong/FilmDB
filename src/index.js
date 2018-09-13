import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


var destination = document.querySelector("#root");

ReactDOM.render(
		<BrowserRouter>
		<App/>
		</BrowserRouter>, destination

);	