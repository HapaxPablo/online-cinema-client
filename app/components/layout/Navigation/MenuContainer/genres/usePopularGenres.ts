import { GenreService } from '@/services/genre.service'
import { getGenreUrl } from 'config/url.config'
import { useQuery } from 'react-query'
import { iMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as iMenuItem)
					)
					.splice(0, 4),
		}
	)

	return queryData
}