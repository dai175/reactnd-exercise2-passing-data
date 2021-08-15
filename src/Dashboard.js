import React, {Component} from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
    render() {
        const {users, movies, usersByMovie } = this.props

        const movieCards = Object.keys(movies).map(id =>(
            <MovieCard
                key={id}
                movie={movies[id]}
                usersWhoLikedMovie={usersByMovie[id]}
                users={users}
            />
        ));

        return <ul>{movieCards}</ul>
    }
}

export default Dashboard;