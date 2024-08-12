import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);

    // Modifica el useEffect para manejar la cuenta regresiva o progresiva
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => isCountingDown ? prevSeconds - 1 : prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [isCountingDown]);

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
                <button onClick={() => clearInterval(interval)} className="btn btn-warning m-2">
                    Stop
                </button>
            </div>
			<p>
				Made by{" "}
				<a href="https://github.com/Ruubia">Ruubia</a>, with
				love!
			</p>
        </div>
    );
};

export default Home;