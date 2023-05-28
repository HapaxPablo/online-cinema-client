import ActorEdit from '@/screens/admin/actor/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit photo={''} name={''} countMovies={0} slug={''} />
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
