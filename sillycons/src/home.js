import React from 'react';
//import { Link } from 'react-router-dom';
import StockCard from './components/stockCard.js';
import './styles/home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        }
    }

    render() {
        var { isLoaded } = this.state;

        if (!isLoaded) {
            return <center>....</center>
        }
        else {
            return <div className='HomeStyle'>
                <div className='HomeIntroStyle'>
                    <h1>Introductory Content</h1>
                </div>
                <div className='HomeStocksStyle'>
                    <StockCard />
                    <StockCard />
                    <StockCard />
                    <StockCard />
                    <StockCard />
                    <StockCard />
                </div>
            </div>;
        }

    }
}

export default Home;
