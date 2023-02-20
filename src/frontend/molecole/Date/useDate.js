import React from 'react';

const useDate = () => {
    const dat = new Date();
    const dt = dat.getDate();
    const day = dat.getDay();
    const month = dat.getMonth();
    const year = dat.getFullYear();
    const hours = dat.getHours();
    const minutes = dat.getMinutes();
    const seconds = dat.getSeconds();
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const clock = hours > 12 ? hours - 12 + ":" + minutes + ":" + seconds + "PM" : hours + ":" + minutes + ":" + seconds + "AM";

    return (
        <>
            <h4>Date:<span>{dt} {monthName[month]}</span>,<span>{year}</span></h4>
            <h1>{dayName[day]},{clock}</h1>

        </>
    );
};

export default useDate;