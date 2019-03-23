import React from 'react';
<<<<<<< HEAD
import ReactDOM from "react-dom";
import './index.css'


class ShoppingList extends React.Component{
    render() {
        return (
            <div className="shopping-list">
                <h1>shopping list for {this.props.name}</h1>
                <ul>
                    <li>instagram</li>
                    <li>instagram</li>
                    <li>instagram</li>
                </ul>
            </div>
        );
    }
}
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 7b1abcfafb7909d8da87fe05a603f2e1a495800a
