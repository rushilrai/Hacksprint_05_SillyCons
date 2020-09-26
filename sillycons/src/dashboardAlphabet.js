import React from 'react';
import DashStockCard from './components/dashstockCard.js';
import './styles/dashboardAlphabet.css'

class DashboardAlphabet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'ARIMA'
    }
  }
  toggle = () => {
    var { current } = this.state;
    console.log('toggle');
    if (current === 'ARIMA') {
      this.setState({ current: 'LSTM' })
    } else {
      this.setState({ current: 'ARIMA' })
    }
  }



  render() {
    var { current } = this.state;
    /*const leftStyle = {
      border: '4px dotted blue',
    };*/
    if (current === 'ARIMA') {
      return <div className='row'>
        <div className='col-4'>
          <center>
            <DashStockCard />
            <div className='toggleAlphabet'>
              <div onClick={this.toggle}>{current}</div>
            </div>
          </center>
        </div>
        <div className='col-7'>
          <div className='row'>
            <div className='graphCloseAlphabet'>Closing Prices</div>
            <div className='graphOpenAlphabet'>Opening Prices</div>
          </div>
          <div className='row'>
            <div className='graphHighAlphabet'>Day High</div>
            <div className='graphLowAlphabet'>Day Low</div>
          </div>
        </div>
      </div>;
    }
    else {
      return <div className='row'>
        <div className='col-4'>
          <center>
            <DashStockCard />
            <div className='toggleAlphabet'>
              <div onClick={this.toggle}>{current}</div>
            </div>
          </center>
        </div>
        <div className='col-7'>
          <div className='graphLSTMAlphabet'></div>
        </div>
      </div>;
    }

  }
}
//What is life? 
//Ans. Just a few jokes


//JOKE 1:
//A perfectionist walked into a bar...apparently, the bar wasn’t set high enough.


//What do you call an Animal you keep in a Car?
//For Answer refer to exampleGraph.js
export default DashboardAlphabet;
