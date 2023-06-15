import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
import AuthButton from '@/components/ui/video-player/AuthPlaceHolder/AuthButton'
import StarRatingComponent from 'react-star-rating-component'

const RateMovie: FC<{ slug: string; _id: string }> = ({ slug, _id }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(_id)

	return (
		<div className={styles.wrapper}>
			<h3>Как вам фильм?</h3>
			<p>Рейтинги улучшают рекомендации</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Спасибо за рейтинг!</div>
					) : (
						<StarRatingComponent
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
