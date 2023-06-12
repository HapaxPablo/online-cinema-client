import { IGalleryItem } from '@/ui/gallery/gallery.types'
import { IMovie } from '@/shared/types/movie.types'
import { ISlide } from '@/components/ui/slider/slider.interface'

export interface ISlideMovie
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title' | 'genres' | 'slug'> {}

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
