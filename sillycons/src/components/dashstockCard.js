import React from 'react';
import '../styles/button.css'
import '../styles/stockCard.css'

/*function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }*/

class DashStockCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            high: '',
            low: '',
            name: '',
            cap: '',
        }
    }
    componentDidMount() {
        const code = localStorage.getItem('code');
        const high = localStorage.getItem('high');
        const low = localStorage.getItem('low');
        const name = localStorage.getItem('name');
        const cap = localStorage.getItem('cap');
        this.setState({
            code: code,
            high: high,
            low: low,
            name: name,
            cap: cap,
        });
    }

    render() {
        var { name, code, high, low, cap } = this.state;
        const textBoxStyle = {
            margin: '10px',
        }
        const codeStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'grey',
            fontSize: '2.2vw'
        }
        const nameStyle = {
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'black',
            fontSize: '2.7vw',
            fontWeight: '700',
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }
        const capStyle = {
            fontFamily: 'Lato !important',
            color: '#5786f8',
            fontSize: '2.5vw',
            fontWeight: '900',
            textAlign: 'center',
        }
        const highStyle = {
            // paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'green',
            fontSize: '2vw'
        }
        const lowStyle = {
            //paddingTop: '5px',
            margin: '0px',
            fontFamily: 'Lato !important',
            color: 'red',
            fontSize: '2vw'
        }
        const topRow = {
            width: '22vw',
            margin: '10px',
            //border: '4px dotted blue',
            // justifyContent: 'left',
        }

        return <div className='stockDashCardStyle'>
            <div style={textBoxStyle}>
            <br></br>
                <div className='row' style={topRow}>
                    <div>
                        <h2 style={codeStyle}>{code}</h2>
                        <h1 style={nameStyle}>{name}</h1>
                    </div>
                </div>
                <div className='row' style={topRow}>
                    <div>
                        <h2 style={capStyle}>
                            ${cap}
                        </h2>
                    </div>
                </div>
                <br></br>
                <div className='row' style={topRow}>
                    <div>
                        <h3 style={highStyle}>H: ${high}</h3>
                        <h3 style={lowStyle}>L: ${low}</h3>
                    </div>
                </div>
                <br></br>
            </div>
        </div>;


    }
}

export default DashStockCard;
