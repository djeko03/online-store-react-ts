import React from 'react';
import MainLayout from "./pages/layout/MainLayout";




const App = () => {


    return (
        <div>
            <MainLayout>
                <div style={{backgroundColor:'black'}}>Content</div>
            </MainLayout>
        </div>

    );
}

export default (App);