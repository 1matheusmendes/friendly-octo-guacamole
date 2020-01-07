import React, {Components} from 'react';
import TodoListItem from './TodoListItem';

export const TodoList = (props) => {
    const { items, removeFromItems } = props;
    return (
        <ul className="list-group">
          { items.map((item, index) => (
            <TodoListItem key={index} index={index} item={item} removeFromItems={removeFromItems} />
          ))}            
        </ul>
    )
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