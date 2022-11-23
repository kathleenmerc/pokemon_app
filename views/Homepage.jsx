const React = require("react")

class Homepage extends React.Component {

    render () {

        const titleStyle = {
            color: '#ffffff',
            backgroundColor: '#000000'
            };

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

        const imgStyle = {
            width: '300px',
            margin: '10px'
        }
        
        return (
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Welcome to the Pokemon App!</h1>
                    <p><img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png " alt="pokemon logo"></img></p>
                    <p><a href="/pokemon"><h2>Go to Pokedex</h2></a></p>
                    <a href="/pokemon/new"><h2>Catch a new Pokemon</h2></a>
                </div>
            </div>
        )
    }
}


module.exports = Homepage