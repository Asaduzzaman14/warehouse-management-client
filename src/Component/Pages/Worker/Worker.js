import React, { useEffect, useState } from 'react';
import SingleWorker from './SingleWorker';
import './Worker.css'


const Worker = () => {

    const [workers, setworkers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/extra')
            .then(res => res.json())
            .then(data => setworkers(data))
    }, [])

    const displaworker = workers.slice(0, 6)
    return (
        <div>
            <h2 className='mt-5 mb-3 '>Meet our Worker</h2>

            <div className='worker-container'>
                {
                    displaworker.map(worker => <SingleWorker
                        worker={worker}
                        key={worker._id}
                    ></SingleWorker>)
                }
            </div>
        </div>
    );
};

export default Worker;