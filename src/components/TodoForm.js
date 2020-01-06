import React, { Component } from 'react';

export default class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        };
    }

    addOn = (event) =>{
        event.preventDefault();

        const {todo} = this.state;
        if(todo){
            //this.props.clickParaEnviar(todo);    
        }
    }

    onChange = (event) => {
        this.setState({todo: event.target.value});
    }
    render(){
        return(
            <div>
                <input type="text" name="todo" placeholder="Entre com seu todo" onChange={this.onChange}/>
                <button type="button" onClick={this.addOn}>Enviar</button>
            </div>
        )
    }
}