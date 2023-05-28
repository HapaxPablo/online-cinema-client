import MovieEdit from '@/screens/admin/movie/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <></> //<MovieEdit slug={''} title={''} actors={[]} poster={''} bigPoster={''} parameters={undefined} genres={[]} countOpened={0} videoUrl={''} rating={0} />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
