import Link from 'next/link'
import { FC } from 'react'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link legacyBehavior href={link}>
				<a className={styles.button}>Больше</a>
			</Link>
		</div>
	)
}

export default MovieList
