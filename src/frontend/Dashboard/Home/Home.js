import React from 'react';
import useDate from '../../molecole/Date/useDate';

const Home = () => {
    const time=useDate()
    return (
        <div>
    {time}
        </div>
    );
};

export default Home;