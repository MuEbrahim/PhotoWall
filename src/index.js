import React from "react";
import ReactDom from "react-dom";
import Main from "./Component/Main";
import {BrowserRouter} from "react-router-dom";



ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById("root"));
