import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'

function ListItem(props) {
    // 正确！这里不需要指定 key:
    return <li>{props.value}</li>;
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('提交的名字' + this.state.value);
        event.preventDefault();
    }
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={number.toString()}
                  value={number}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>the water would boil</p>
    }
    return <p>the water would not boil</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''}
    }

    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>enter temperaturein celsius</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }

}

ReactDOM.render(
    <Blog posts={posts}/>
    ,
    document.getElementById('root')
);