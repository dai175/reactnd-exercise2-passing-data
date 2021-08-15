import React, {Component} from "react";

class MovieCard extends Component{
    render() {
        const { movie, usersWhoLikedMovie, users } = this.props

        return (
            <li>
                <h2>{movie.name}</h2>
                <p>Liked By:</p>

                {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
                    <p>None of the current users liked this movie.</p>
                ) : (
                    <ul>
                        {usersWhoLikedMovie.map(userId => {
                            return (
                                <li key={userId}>
                                    {users[userId].name}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </li>
        )
    }
}

export default MovieCard;