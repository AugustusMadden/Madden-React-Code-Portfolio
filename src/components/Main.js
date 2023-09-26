import React, { useState } from 'react';

import NavHeader from './NavHeader';
import Footer from './Footer';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

import './Styles/Main.css'

function Main() {
    const [currentPage, setCurrentPage] = useState('Portfolio');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        } 
        if (currentPage === 'Contact') {
            return <Contact />;
        } 
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } 
        return <Resume />;
        
    }

    const handlePageChange = (page) => setCurrentPage(page);

    
    return (
        <div class="page-content">
        <NavHeader currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
        </div>
        
    );
}

export default Main;