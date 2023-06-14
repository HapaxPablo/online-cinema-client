import Catalog from "@/components/ui/catalog-movies/Catalog"
import { MovieService } from "@/services/movie.service"
import { IMovie } from "@/shared/types/movie.types"
import { GetStaticProps, NextPage } from "next"

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Свежие фильмы"
			description="Новые фильмы в отличном качестве: легально, безопасно, без рекламы"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movies } = await MovieService.getMovies()
		return {
			props: { movies },
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
