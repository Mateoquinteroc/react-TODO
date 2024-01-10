import React from "react";
import './TodoCounter.css'

function TodoCounter({ completedTodos,totalTodos } ) {
    return (
        
        <h1 className="TodoCounter">
            Estan completas <span>{completedTodos} </span>
            de <span>{totalTodos}</span> TODOs
        </h1>


    );
}

export { TodoCounter };