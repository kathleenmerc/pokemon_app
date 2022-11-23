const React = require("react");
//const pokemon = require("../models/pokemon");
//const Index = require("./Index");

class Show extends React.Component {
    
    render() { 
        
        const {name, img} = this.props.pokemon

        const titleStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            }

        const bodyStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }

        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#B90E0A',
            color: 'white',
            fontFamily: 'comic sans ms',
            height: '600px',
            width: '500px',
            border: '2px solid black',
            margin: '20px'
        }

        const buttonStyle = {
            fontFamily: 'comic sans ms',
            width: '300px',
            height: '50px',
            textAlign: 'center',
            fontSize: '20px'
        }

        return (
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Gotta Catch 'Em All</h1>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <img src={img} alt={name + " image"}></img>
                    <p style={buttonStyle}><a href={"/pokemon"}>Back</a>
                    </p>
                </div>
            </div>   
        )
    }
}


module.exports = Show 