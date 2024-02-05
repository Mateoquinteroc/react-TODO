import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que tienes cambios en otra ventana</p>
                    <p>quieres sincronizar tus TODOS</p>
                    <button className="TodoForm-button TodoForm-button--add"
                    onClick={() => toggleShow(false)}
                    >
                    sincronizar 
                    </button>
                </div>

            </div>
        )

    } else {
        return null;
    }

}

export { ChangeAlert}