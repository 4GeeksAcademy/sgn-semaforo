import React, { useState } from "react";




const Semaforo = () => {
    const [color, setColor] = useState("red");
    return (
        <div className="container">
            <div className="palito"></div>
            <div className="semaforo">
                <span onClick={() => setColor("red")} className={color == "red" ? "red-glow" : "red"}></span>
                <span onClick={() => setColor("yellow")} className={color == "yellow" ? "yellow-glow" : "yellow"}></span>
                <span onClick={() => setColor("green")} className={color == "green" ? "green-glow" : "green"}></span>

            </div>

        </div>


    );
};


export default Semaforo;


// function verificarNumero(numero) {
//     return numero > 0 ? "Positivo" : numero === 0 ? "Cero" : "Negativo";
//   }

