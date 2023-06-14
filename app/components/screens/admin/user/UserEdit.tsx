import { IUserEditInput } from './user-edit.interface'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useUserEdit } from './useUserEdit'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import AuthFields from '@/components/layout/Navigation/MenuContainer/auth/AuthFields'
import Button from '@/components/ui/from-elements/Button'


const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading title="Редактировать пользователя" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields
							register={register}
							formState={formState}
							isPasswordRequired={false}
						/>
						<Controller
							name="isAdmin"
							control={control}
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className="text-link block mb-7"
								>
									{field.value ? 'Обычный' : 'Администратор'}
								</button>
							)}
						/>
					</>
				)}

				<Button>Обновить</Button>
			</form>
		</Meta>
	)
}

export default UserEdit
