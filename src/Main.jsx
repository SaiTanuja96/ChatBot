
import React from 'react';
import './App.css';

import StockExchange from './StockExchange';
const Main = () => {

    return (
        <div class="container text-center" >
            <div class="mb-3">
                <div className='botTitle'>
                    <h5>LSEG Chatbot</h5>
                    
                </div>
            <h4 className='greeting'>Hello! Welcome to LSEG. I am here to help you.</h4>
            
                            <div>
                    <StockExchange />

                    </div>

            </div>
        </div>
    );
};

export default Main;
