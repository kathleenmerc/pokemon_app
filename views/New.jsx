const React = require("react")

class New extends React.Component {

    render() {

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

        const imgStyle = {
            width: '150px',
            margin: '15px'
        }

        return (
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Catch a new Pokemon!</h1>
                    <p><img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="Pokeball image"></img></p>
                    <form action="/pokemon" method="POST">
                        Pokemon Name: <input type="text" name="name" />

                        <p>Choose your Poke Ball: </p>
                        <input type="radio" name="pokeball" value="Poke Ball" />Poke Ball<br/>
                        <input type="radio" name="pokeball" value="Great Ball" />Great Ball<br/>
                        <input type="radio" name="pokeball" value="Ultra Ball" />Ultra Ball<br/>
                        <input type="radio" name="pokeball" value="Master Ball" />Master Ball<br/>
                        <p><input style={buttonStyle} type="submit" name="" value="Throw your Poke Ball!"/></p>
                    </form>
                </div>
            </div>
        )
    }
}


module.exports = New