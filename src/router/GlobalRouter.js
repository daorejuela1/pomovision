import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Header from "../components/Header";
import Footer from "../components/Footer";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing />} />
                <Route path="/restaurants" element={<Layout><Overview /></Layout>} />
                <Route path="/restaurants/:restaurantId" element={<Layout><RestaurantDetails /></Layout>} /> */}
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        <div className="content">
        {children}
        </div>
        <Footer />
    </>
);

export default GlobalRouter;