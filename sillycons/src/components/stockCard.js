import React from 'react';

class StockCard extends React.Component {
    render() {
        const stockCardStyle = {
            backgroundColor: 'white',
            height: '200px',
            width: '400px',
            borderRadius: '10px',
            boxShadow: '0px 0px 5px 2px #f5f5f6',
            margin: '20px',
        }
        const textBoxStyle = {
            margin: '10px',
        }
        const codeStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'grey',
        }
        const nameStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'black',
        }
        const highStyle = {
           // paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'green',
        }
        const lowStyle = {
            //paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'red',
        }
        return <div style={stockCardStyle}>
            <div style={textBoxStyle}>
                <h2 style={codeStyle}>MSFT</h2>
                <h1 style={nameStyle}>Microsoft</h1>
                <br></br>
                <h3 style={highStyle}>H: $205.57</h3>
                <h3 style={lowStyle}>L: $199.20</h3>
            </div>
        </div>;
    }
}

export default StockCard;
