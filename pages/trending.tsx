import Catalog from "@/components/ui/catalog-movies/Catalog"
import { MovieService } from "@/services/movie.service"
import { GetStaticProps, NextPage } from "next"
import { dehydrate, QueryClient, useQuery } from "react-query"

const TrendingPage: NextPage = () => {
	const { data: popularMovies } = useQuery('Popular movies', () =>
		MovieService.getMostPopularMovies()
	)

	return (
		<Catalog
			movies={popularMovies || []}
			title="Популярные фильмы"
			description="Актуальные фильмы в отличном качестве: легально, безопасно, без рекламы"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('Popular movies', () =>
		MovieService.getMostPopularMovies()
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export default TrendingPage
