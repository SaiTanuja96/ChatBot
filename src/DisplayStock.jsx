import React, { useState, useEffect } from 'react';
import data from './staticData'
import StockExchange from './StockExchange';
import './App.css';


const DisplayStock = ({ exchange, showStocks }) => {

    console.log(data, "finaldata")
    const [selectedStock, setSelectedStock] = useState('');
    const [stockPrice, setStockPrice] = useState(null);
    const [showPrice, setShowPrice] = useState(false);
    const [showExchange, setShowExchange] = useState(false)


    const handleStockSelect = (listItem) => {

        setShowPrice(true);
        setStockPrice(listItem.price)
        setSelectedStock(listItem.stockName)
    };
    const refreshPage = () => {
        window.location.reload(false);
    };

    const fetchStockPrice = (stock) => {
        const simulatedPrice = (Math.random() * 100 + 50).toFixed(2);
        setStockPrice(simulatedPrice);
    };

    return (
        <div class="container text-center" >

            <div class='overflow-auto'>


                {showStocks && <div className='seperator'>

                    <ul class="stocks list-group container">
                    <li className='selectMessage'>Please select a Stock</li>

                        {data.map((item) => {

                            if (exchange === item.stockExchange) {

                                return item.topStocks.map((listItem) => (
                                    <>

                                        <li
                                            className="list-group-item"
                                            key={listItem.stockName}
                                            onClick={() => { handleStockSelect(listItem) }}
                                        >
                                            {listItem.stockName}
                                        </li>
                                    </>
                                ));
                            }
                            return null;
                        })}

                    </ul>
                    <h6 className='selectedOption'>{selectedStock}</h6>

                </div>}
                {showPrice && <div style={{ marginTop: '5rem' }}>
                    <ul class="stocks list-group container">
                    <li className='selectMessage'>Stock Price of {selectedStock} is {stockPrice}. Please select an option</li>

                        <li class="list-group-item">{stockPrice}</li>

                        <li class="list-group-item" onClick={() => setShowExchange(true)}>MainMenu</li>
                        <li class="list-group-item" onClick={refreshPage}>GoBack</li>

                    </ul>
                </div>}

                {showExchange && <StockExchange />}

            </div>
        </div>
    );
};

export default DisplayStock;
