import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../views/Home";
import Rest from '../views/Rest';
import Videos from '../views/Videos';
import About from "../views/About";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing />} />
                <Route path="/restaurants/:restaurantId" element={<Layout><RestaurantDetails /></Layout>} /> */}
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/rest" element={<Layout><Rest/></Layout>} />
                <Route path="/videos" element={<Layout><Videos/></Layout>} />
                <Route path="/about" element={<Layout><About/></Layout>} />
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