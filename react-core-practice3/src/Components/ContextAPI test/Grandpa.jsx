import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle'; 
const Grandpa = () => {
    return (
        <div>
            <h1>Grandpa</h1>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;