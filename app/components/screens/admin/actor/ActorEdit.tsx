import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Button from '@/components/ui/from-elements/Button'
import Field from '@/components/ui/from-elements/Field'
import SlugField from '@/components/ui/from-elements/SlugField/SlugField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import formStyles from '../../../ui/from-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'
import UploadField from '@/components/ui/from-elements/UploadField/UploadField'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/from-elements/TextEditor'),
	{
		ssr: false,
	}
)

const ActorEdit: FC<IActorEditInput> = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Изменить актёра">
			<AdminNavigation />
			<Heading title="Изменить актёра" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', { required: 'Требуется название!' })}
								placeholder="Название"
								error={errors.name}
							/>
							<SlugField
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
								register={register}
								error={errors.slug}
							/>

							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Нужно фото!',
								}}
							/>
						</div>
						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
