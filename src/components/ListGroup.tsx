import { Fragment } from "react";

function ListGroup(){

    const items = ['New York', 'San Francisco', 'LA', 'Ottawa', 'Delhi'];
    
    return(
        <Fragment>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => ( 
                    <li 
                        className="list-group-item" 
                        key = {item} 
                        onClick={() => console.log(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
      </Fragment>
       
    );
}

export default ListGroup;