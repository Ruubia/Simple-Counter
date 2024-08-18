import React, { useState, useEffect, useRef } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
    const [seconds, setSeconds] = useState(0);  // Tiempo actual en el contador
    const [isCountingDown, setIsCountingDown] = useState(false);  // Indica si está contando hacia abajo
    const intervalRef = useRef(null);  // Referencia al intervalo

    // Lógica para manejar el contador hacia arriba o hacia abajo
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) =>
                isCountingDown ? Math.max(prevSeconds - 1, 0) : prevSeconds + 1
            );
        }, 1000);

        return () => clearInterval(intervalRef.current); // Limpia el intervalo cuando el componente se desmonta
    }, [isCountingDown]);

    // Alerta cuando el contador llegue a los últimos 10 segundos antes de alcanzar 0
    useEffect(() => {
        if (isCountingDown && seconds <= 10 && seconds > 0) {
            alert('¡Quedan menos de 10 segundos!');
        }
    }, [seconds, isCountingDown]);

    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
            <div className="mt-3">
                <button onClick={() => setIsCountingDown(false)} className="btn btn-primary m-2">
                    Start Count Up
                </button>
                <button onClick={() => setIsCountingDown(true)} className="btn btn-secondary m-2">
                    Start Count Down
                </button>
                <button onClick={() => setSeconds(0)} className="btn btn-danger m-2">
                    Reset
                </button>
                <button onClick={() => {
                    clearInterval(intervalRef.current); 
                    setIsCountingDown(false); 
                }} className="btn btn-warning m-2">
                    Stop
                </button>
            </div>
        </div>
    );
};

export default Home;

