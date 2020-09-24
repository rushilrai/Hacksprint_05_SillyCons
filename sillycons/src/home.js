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
        const teamnameStyle = {
            fontFamily: 'Lato !important',
            color: '#5786f8',
            fontSize: '2.5vw',
            fontWeight: '900'
        }
        const projectnameStyle = {
            fontFamily: 'Lato !important',
            color: 'black',
            fontSize: '5vw',
            fontWeight: '900'
        }
        const descStyle = {
            fontFamily: 'Lato !important',
            color: 'black',
            fontSize: '2vw',
            fontWeight: '700'
        }
        var { isLoaded } = this.state;

        if (!isLoaded) {
            return <center>....</center>
        }
        else {
            return <div className='HomeStyle'>
                <div className='HomeIntroStyle'>
                    <h1 style={teamnameStyle}>Team SillyCons present,</h1>
                    <h1 style={projectnameStyle}>Project Name</h1>
                    <h1 style={descStyle}>Project Description</h1>
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
