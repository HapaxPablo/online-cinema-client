import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <div>Admin Page</div>
}

AdminPage.isOnlyAdmin = true

export default AdminPage
