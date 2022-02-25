import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC = ({children}) => {
    return (
        <div className='layout'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;