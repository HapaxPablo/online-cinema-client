import { errorCatch } from 'api/api.helpers'
import type { GetStaticProps, NextPage } from 'next'
import Home from '@/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { MovieService } from '@/services/movie.service'
import { ActorService } from '@/services/actor.service'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { getActorUrl, getMovieUrl } from 'config/url.config'
import { getGenresList } from '@/utils/movie/getGenreList'
import { IGalleryItem } from '@/components/ui/gallery/gallery.types'


const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getMovies()
		const { data: dataActors } = await ActorService.getAll()
		const datatTrendingMovies = await MovieService.getMostPopularMovies()

		const slides: ISlide[] = movies.map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 5).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies}`,
			},
		}))

		const trendingMovies: IGalleryItem[] = datatTrendingMovies
			.slice(0, 4)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
