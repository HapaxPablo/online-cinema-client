import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import { IGalleryItem } from '@/components/ui/gallery/gallery.types'
import SubHeading from '@/components/ui/heading/SubHeading'
import { IMovie } from '@/shared/types/movie.types'
import VideoPlayer from '@/ui/video-player/VideoPlayer'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Content from './content/Content'
import RateMovie from './RateMovie/RateMovie'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})
const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
	movie,
	similarMovies,
}) => {
	useUpdateCountOpened(movie.slug)
	return (
		<Meta title={movie.title} description={`Смотреть ${movie.title}`}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<VideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div className="mt-12">
				<SubHeading title="Похожее" />
				<Gallery items={similarMovies} />
			</div>

			<RateMovie slug={movie.slug} _id={movie._id} />
		</Meta>
	)
}

export default SingleMovie
