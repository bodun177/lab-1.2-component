import React from 'react';
import Hello from '../components/Hello';
import Goodbye from '../components/Goodbye';
import Counter from '../components/Counter';

function Home() {
    return (
        <div>
            <Hello />
            <Goodbye />
            <Counter />
        </div>
    );
}

export default Home;