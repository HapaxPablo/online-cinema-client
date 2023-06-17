import { FC } from 'react'
import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { useAuth } from '@/hooks/useAuth'
import NotAuthFavorites from './NotAuthFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MovieList from '../MovieList'

const FavoriteMovieList: FC = () => {
	const { isLoading, favoritesMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	if (isLoading) {
		try {
			return (
				<div className="mt-11">
					<SkeletonLoader count={3} className="h-28 mb-4" />
				</div>
			)
		} catch (error) {
			console.error('Error in SkeletonLoader:', error)
			// Дополнительные действия по обработке ошибки, если нужно
		}
	}

	return (
		<MovieList
			list={{
				link: '/favorites',
				movies: favoritesMovies?.slice(0, 3) || [],
				title: 'Избранное',
			}}
		/>
	)
}

export default FavoriteMovieList
