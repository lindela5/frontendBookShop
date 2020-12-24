import logo from '../../logo.svg';
import React from "react";
import './App.css';
import BookList from "../BookList/BookList.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main} from "../Main";

function App() {

    return (
        // <div><span>sss</span></div>
        <>
            {/*<BrowserRouter>*/}
                {/*<Switch>*/}
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/books" component={BookList}/>
                {/*</Switch>*/}
            {/*</BrowserRouter>*/}
        </>
    );
}

export default App;
