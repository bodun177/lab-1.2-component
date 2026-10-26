import React, { useState } from 'react';

function Counter() {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <p>{clicked ? 'Ви натиснули кнопку!' : 'Натисніть кнопку'}</p>
            <button onClick={() => setClicked(!clicked)}>
                Натиснути
            </button>
        </div>
    );
}

export default Counter;