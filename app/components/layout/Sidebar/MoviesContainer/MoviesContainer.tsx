import PopularMovie from '@/components/screens/admin/home/Statistics/PopularMovie'
import { FC } from 'react'
import FavoriteMovieList from './FavoritesMovies/FavoriteMovies'
import PopularMovieList from './PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			<FavoriteMovieList />
		</div>
	)
}

export default MoviesContainer
