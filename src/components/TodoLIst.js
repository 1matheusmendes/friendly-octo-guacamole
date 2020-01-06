import React, {Components} from 'react';
import TodoListItem from './TodoListItem';

export const TodoList = (props) => {
    return(
        <ul>
             {items.map((item, index) => (
             <TodoListItem key={index} item={item} />
        ))}   
        </ul>
    );
}



//export default class TodoList extends Components{
//    constructor(props){
//        super(props);

//    }

//    render(){
//       return(
//            <ul>

//            </ul>
//        );
//    }
//}