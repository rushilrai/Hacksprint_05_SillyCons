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

  /*  componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                })
            })
    } */


    render() {
        var { isLoaded} = this.state;

        if (!isLoaded) {
            return <center>....</center>
        }
        else {
            return <div>
                <Link to='/dashboard'>Go to Dash</Link>
                <StockCard />
            </div>;
        }

    }
}

export default Home;
