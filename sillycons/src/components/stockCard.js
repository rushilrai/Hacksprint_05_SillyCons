import React from 'react';

class StockCard extends React.Component {
  render() {
      const stockCardStyle = {
          marginLeft: '5em',
          marginTop: '2em',
          backgroundColor: 'white',
          height: '20vw',
          width: '20vw',
          borderRadius: '15px',
          boxShadow: '5px 5px 5px 5px #f5f5f6',
      }
      return <div style={stockCardStyle}>
        <h1>Dashboard</h1>
        <p className="ml-2">Company Name: </p>
        <p className="ml-2">Stock Code:</p>
        <p className="ml-2">Current Price:</p>
        </div>;
  }
}

export default StockCard;
