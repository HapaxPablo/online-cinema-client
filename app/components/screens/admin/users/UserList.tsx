import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Пользователи" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default UserList
