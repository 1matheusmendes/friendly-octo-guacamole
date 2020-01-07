import React, { Component } from 'react';
import TodoForm from './../components/TodoForm';
import { TodoList } from './../components/TodoList';
import { ContainerApp } from './../components/ContainerApp';


export default class TodoListApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    clickParaEnviar = (todo) => {
        const { items } = this.state;
        this.setState ({
            items: [... items, todo]
        });
    }
    removeFromItens = (index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({items});
    }

    render(){
        const { items } = this.state;
        return(
            <ContainerApp>
                <div className="col-xs-12 col-md-12">
                    <h2>Todolist</h2>
                </div>
                <div className="col-xs-12 col-md-12">
                    <TodoForm clickParaEnviar={this.clickParaEnviar} />
                </div>
                <hr/>
                <div className="col-xs-12 col-md-12">
                    <TodoList items={items} removeFromItems={this.removeFromItems}/>
                </div>
            </ContainerApp>
        )
    }
}