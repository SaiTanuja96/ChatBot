// src/Chatbot.js
import React, { useState } from 'react';
import data from './staticData'
const stockData = {
    LSEG: ["LON:VOD", "LON:HSBA", "LON:BP", "LON:RIO", "LON:TSCO"],
    NASDAQ: ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"],
    NYSE: ["IBM", "JNJ", "WMT", "KO", "DIS"]
};

const Chatbot = () => {
    
    console.log(data,"finaldata")
    const [exchange, setExchange] = useState('');
    const [selectedStock, setSelectedStock] = useState('');
    const [stockPrice, setStockPrice] = useState(null);
    const [showStocks, setShowStocks] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    const handleExchangeSelect = (e) => {
        setExchange(e.target.value);
        setShowStocks(true);
        setStockPrice(null);
        setShowPrice(false);
    };

    const handleStockSelect = (stock) => {
        setSelectedStock(stock);
        fetchStockPrice(stock);
        setShowPrice(true);
    };

    const fetchStockPrice = (stock) => {
        // Simulated stock price fetching
        const simulatedPrice = (Math.random() * 100 + 50).toFixed(2);
        setStockPrice(simulatedPrice);
    };

    return (
        <div>
            <h1>Stock Price Chatbot</h1>
            {!exchange && (
                <div>
                    <h2>Please select a stock exchange:</h2>
                    <button onClick={() => handleExchangeSelect({ target: { value: 'LSEG' } })}>LSEG</button>
                    <button onClick={() => handleExchangeSelect({ target: { value: 'NASDAQ' } })}>NASDAQ</button>
                    <button onClick={() => handleExchangeSelect({ target: { value: 'NYSE' } })}>NYSE</button>
                    stocks.map
                </div>
            )}
            {showStocks && (
                <div>
                    <h2>You selected {exchange}. Here are 5 stocks:</h2>
                    {stockData[exchange].map(stock => (
                        <button key={stock} onClick={() => handleStockSelect(stock)}>{stock}</button>
                    ))}
                </div>
            )}
            {showPrice && stockPrice !== null && (
                <div>
                    <h2>The latest price of {selectedStock} is ${stockPrice}.</h2>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
