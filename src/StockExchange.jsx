
import React, { useState, useEffect } from 'react';

import data from './staticData'
import DisplayStocks from './DisplayStock'
import './App.css';

const StockExchange = () => {
    const [exchange, setExchange] = useState('');

    const [showStocks, setShowStocks] = useState(false);

    const handleExchangeSelect = (item) => {
        console.log(item.code); setExchange(item.stockExchange); setShowStocks(true)
    };


    return (
        <div class="container text-center" >
            <div className='seperator'>
                <ul class="list-group container">
                    <li className='selectMessage'>Please select a Stock Exchange</li>
                    {data.map((item, index) => {
                        return <li class="list-group-item" onClick={() => { handleExchangeSelect(item) }}>{item.stockExchange}</li>

                    })}
                </ul>
            </div>
            <h6 className='selectedOption'>{exchange}</h6>
            <div>

                <DisplayStocks exchange={exchange} showStocks={showStocks} />
            </div>
        </div>
    );
};

export default StockExchange;
