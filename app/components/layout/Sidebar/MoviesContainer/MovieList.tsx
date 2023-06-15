import Link from 'next/link'
import { FC } from 'react'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	const limitedMovies = movies.slice(0, 3)
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{limitedMovies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			{movies.length > 3 && ( // Проверяем, есть ли больше трех фильмов
				<Link legacyBehavior href={link}>
					<a className={styles.button}>Больше</a>
				</Link>
			)}
		</div>
	)
}

export default MovieList
