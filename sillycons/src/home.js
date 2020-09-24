import React from 'react';
import { Link } from 'react-router-dom';
import StockCard from './components/stockCard.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        }
    }

    render() {
        var { isLoaded } = this.state;
        const HomeStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            //alignItems: 'space-around',
            //width: '100vw',
           // border: '4px dotted blue',
        }
        const HomeStocksStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            height: '100vh',
            width: '49vw',
            alignContent: 'center',
           // border: '4px dotted blue',
        }
        const HomeIntroStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            height: '100vh',
            width: '40vw',
            alignContent: 'center',
            justifyContent: 'center',
          //  border: '4px dotted blue',
            fontFamily: 'Lato',
        }

        if (!isLoaded) {
            return <center>....</center>
        }
        else {
            return <div style={HomeStyle}>
                <div style={HomeIntroStyle}>
                    <h1>Introductory Content</h1>
                </div>
                <div style={HomeStocksStyle}>
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
