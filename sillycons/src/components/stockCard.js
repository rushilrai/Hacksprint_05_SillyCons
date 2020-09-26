import React from 'react';
import { Link } from "react-router-dom";
import '../styles/button.css'
import '../styles/stockCard.css'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


class StockCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            delay: this.props.delay,
            code: this.props.code,
            name: '',
            high: '',
            low: '',
            cap: '',
        }
    }

     componentDidMount() {
          var delay = this.props.delay;
          var code = this.props.code;
          sleep(delay);
          fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?region=US&symbol=${code}`, {
              "method": "GET",
              "headers": {
                  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                  "x-rapidapi-key": "16cde4adf6mshadf36ae0ac52484p1c7495jsnd0136c960e60"
              }
          })
              .then(res => res.json())
              // .then(obj => {console.log(obj['quoteType']['longName'])})
              .then(obj => {
                  this.setState({
                      isLoaded: true,
                      name: obj['quoteType']['longName'],
                      //code: obj['quoteType']['symbol'],
                      high: obj['summaryDetail']['dayHigh']['fmt'],
                      low: obj['summaryDetail']['dayLow']['fmt'],
                      cap: obj['price']['marketCap']['fmt'],
                  })
              })
      }


    render() {
        var { isLoaded, name, code, high, low, cap } = this.state;
        const textBoxStyle = {
            margin: '10px',
        }
        const codeStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'grey',
            fontSize: '1.5vw'
        }
        const nameStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'black',
            fontSize: '2vw',
            fontWeight: '700',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }
        const capStyle = {
            fontFamily: 'Lato !important',
            color: '#5786f8',
            fontSize: '1.5vw',
            fontWeight: '900',
            textAlign: 'center',
        }
        const highStyle = {
            // paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'green',
            fontSize: '1.3vw'
        }
        const lowStyle = {
            //paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'red',
            fontSize: '1.3vw'
        }
        const buttonRow = {
            //border: '4px dotted blue',
            justifyContent: 'space-between',
            //alignContent: 'center',
            // marginRight: '10px',
        }
        const topRow = {
            //border: '4px dotted blue',
            justifyContent: 'space-between',
        }
        if (!isLoaded) {
            return <div className='loadingCard'>Loading</div>
        }
        else {
            return <div className='stockCardStyle'>
                <div style={textBoxStyle}>
                    <div className='row' style={topRow}>
                        <div className='col-7'>
                            <h2 style={codeStyle}>{code}</h2>
                            <h1 style={nameStyle}>{name}</h1>
                        </div>
                        <div className='col-5 my-auto'>
                            <h2 style={capStyle}>
                                $ {cap}
                            </h2>
                        </div>
                    </div>
                    <br></br>
                    <div className='row' style={buttonRow}>
                        <div className='col-7'>
                            <h3 style={highStyle}>H: ${high}</h3>
                            <h3 style={lowStyle}>L: ${low}</h3>
                        </div>
                        <div className='col-4 my-auto'>
                            <Link to={`${code}`}><div className='buttonStyle' onClick={() => goToDash(code, name, high, low, cap)}>Predict</div></Link>
                        </div>

                    </div>
                </div>
            </div>;
        }

    }
}

export default StockCard;

function goToDash(code, name, high, low, cap) {
    localStorage.setItem('code', code);
    localStorage.setItem('name', name);
    localStorage.setItem('high', high);
    localStorage.setItem('low', low);
    localStorage.setItem('cap', cap);
}
