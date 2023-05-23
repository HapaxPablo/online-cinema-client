import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'
import { getAdminHomeUrl } from 'config/url.config'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Войти' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Панель администратора',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
