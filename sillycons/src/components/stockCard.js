import React from 'react';

class StockCard extends React.Component {
  render() {
      const stockCardStyle = {
          backgroundColor: 'white',
          height: '20vw',
          width: '20vw',
          borderRadius: '15px',
          boxShadow: '5px 5px 5px 5px #f5f5f6',
      }
      return <div style={stockCardStyle}><h1>dash</h1></div>;
  }
}

export default StockCard;
