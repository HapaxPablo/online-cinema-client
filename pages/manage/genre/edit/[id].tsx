import GenreEdit from '@/screens/admin/genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit name={''} slug={''} description={''} icon={'Md123'} />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
