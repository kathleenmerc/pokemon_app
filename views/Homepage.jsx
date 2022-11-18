const React = require("react")

class Homepage extends React.Component {
    render () {
        return (
            <div>
                <h1>Welcome to the Pokemon App!</h1>
                <a href="/pokemon">Go to Pokedex</a> <br/>
                <a href="/pokemon/new">Catch a new Pokemon</a>
            </div>
        )
    }
}

module.exports = Homepage