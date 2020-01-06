import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class Todolist extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[],
            todo: ''
        }
    }

    onChange = (event) => {
        this.setState({todo: event.target.value});
    }

    clickParaEnviar = (event) => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.todo],
            todo: ''
        });
    }
    render(){
        const {items} = this.state;

        return(
            <div>
                <input type="text" name="todo" placeholder="Entre com seu todo" onChange={this.onChange}/>
                <button type="button" onClick={this.clickParaEnviar}>Enviar</button>
                <TodoForm />
                <hr/>

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}   
                </ul>
            </div>
        )
    }
}
