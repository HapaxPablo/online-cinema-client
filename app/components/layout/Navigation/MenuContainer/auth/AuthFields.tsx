import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/shared/regex'
import Field from '@/components/ui/from-elements/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Email введён неверно',
					},
				})}
				placeholder='E-mail'
				//error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Минимальная длина пароля 6 символов!',
								},
						  }
						: {}
				)}
				placeholder='Пароль'
				type='password'
				//error={errors.password}
			/>
		</>
	)
}

export default AuthFields
