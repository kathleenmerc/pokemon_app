const React = require("react");
//const pokemon = require("../models/pokemon");

class Index extends React.Component {
    render() { 
        const { pokemon } = this.props
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };
        const bodyStyle = {
            backgroundColor: "#B90E0A",
            color: "white"
        }
        
        return (
            <div style={bodyStyle}>
                <h1 style={myStyle}>Welcome to your Pokedex</h1>
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
                <a href="/pokemon/new"><h3>Catch a new Pokemon</h3></a>
            </div>
        )
    }
}

module.exports = Index