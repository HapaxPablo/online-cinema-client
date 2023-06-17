import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './SearchList.module.scss'
import Image from "next/image"
import { IMovie } from '@/shared/types/movie.types'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
        <div className={styles.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link legacyBehavior key={movie._id} href={`/movie/${movie.slug}`}>
						<a>
							<Image
                                src={movie.poster || ''}
                                width={50}
                                height={50}
                                alt={movie.title}
                                draggable={false}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    objectPosition: "top"
                                }} />
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className='text-white text-center my-4'>Фильм не найден!</div>
			)}
		</div>
    );
}

export default SearchList
