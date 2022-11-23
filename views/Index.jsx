const React = require("react");
//const pokemon = require("../models/pokemon");

class Index extends React.Component {

    render() { 

        const { pokemon } = this.props

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
        
        return (
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    
                    <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex image"></img>
                    <ul>
                        {
                            pokemon.map((pokemon, i) => {
                                return (
                                        <li key = {i}>
                                            <a href={`/pokemon/${pokemon._id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                                        </li>
                                )
                            })
                        }
                    </ul>
                    <a href="/pokemon/new"><h2>Catch a new Pokemon</h2></a>
                    <a href="/"><h2>Go to Homepage</h2></a>
                </div>
            </div>
        )
    }
}


module.exports = Index 