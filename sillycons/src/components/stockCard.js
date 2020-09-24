import React from 'react';
import '../styles/button.css'
import '../styles/stockCard.css'

class StockCard extends React.Component {
    render() {
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
            fontWeight: '700'
        }
        const capStyle = {
            fontFamily: 'Lato !important',
            color: '#5786f8',
            fontSize: '1.6vw',
            fontWeight: '900'
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
            // marginRight: '10px',
        }
        const topRow = {
            //border: '4px dotted blue',
            justifyContent: 'space-between',
        }
        return <div className='stockCardStyle'>
            <div style={textBoxStyle}>
                <div className='row' style={topRow}>
                    <div className='col-7'>
                        <h2 style={codeStyle}>MSFT</h2>
                        <h1 style={nameStyle}>Microsoft</h1>
                    </div>
                    <div className='col-4 my-auto'>
                        <h2 style={capStyle}>
                            $ 1.54T
                        </h2>
                    </div>
                </div>
                <br></br>
                <div className='row' style={buttonRow}>
                    <div className='col-8'>
                        <h3 style={highStyle}>H: $205.57</h3>
                        <h3 style={lowStyle}>L: $199.20</h3>
                    </div>
                    <div className='col-4 my-auto'>
                        <div className='buttonStyle'>Predict</div>
                    </div>

                </div>
            </div>
        </div>;
    }
}

export default StockCard;
