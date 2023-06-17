import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { getGenresListEach } from '@/utils/movie/getGenreList'
import { getGenresUrl } from 'config/api.config'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IWidgetMovie } from './movie-list.interface'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IWidgetMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link legacyBehavior key={_id} href={getGenresUrl(slug)}>
								<a>{getGenresListEach(idx, movie.genres.length, name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name='MdStarRate' />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
