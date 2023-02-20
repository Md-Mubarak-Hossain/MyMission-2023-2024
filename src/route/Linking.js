import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../frontend/Dashboard/Home/Home';

const Linking = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/home" element={<Home />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>

        </>
    );
};

export default Linking;