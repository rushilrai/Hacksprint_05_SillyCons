import React from 'react';
import DashStockCard from './components/dashstockCard.js'

class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      stock: '',
    }
  }
  componentDidMount() {
    const code = localStorage.getItem('code');
    this.setState({stock: code});
  }
  render() {
    var { stock } = this.state;
    return <div>{stock}</div>;
  }
}
//What is life? 
//Ans. Just a few jokes


//JOKE 1:
//A perfectionist walked into a bar...apparently, the bar wasn’t set high enough.


//What do you call an Animal you keep in a Car?
//For Answer refer to exampleGraph.js
export default Dashboard;
