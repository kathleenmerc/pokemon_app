const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Catch a New Pokemon!</h1>
                <form action="/pokemon" method="POST">
                    Pokemon Name: <input type="text" name="name" /><br/>
                    Put image link: <input type="text" name="img" /><br/>
                    Choose your Poke Ball: <br/>
                    <input type="radio" name="pokeball" value="Poke Ball" />Poke Ball<br/>
                    <input type="radio" name="pokeball" value="Great Ball" />Great Ball<br/>
                    <input type="radio" name="pokeball" value="Ultra Ball" />Ultra Ball<br/>
                    <input type="radio" name="pokeball" value="Master Ball" />Master Ball<br/>
                    <input type="submit" name="" value="Throw your Poke Ball!" />
                </form>
            </div>
        )
    }
}

module.exports = New