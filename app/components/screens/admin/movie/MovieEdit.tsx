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
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import formStyles from '../../../ui/from-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/from-elements/TextEditor'),
	{
		ssr: false,
	}
)

const MovieEdit: FC<IMovieEditInput> = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Meta title="Изменить жанр">
			<AdminNavigation />
			<Heading title="Изменить жанр" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						{/*<div className={formStyles.fields}>
							<Field
								{...register('title', { required: 'Требуется название!' })}
								placeholder="Название"
								error={errors.title}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('slug')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>
							<Field
								{...register('', { required: 'Требуется иконка(MdIcon)!' })}
								placeholder="Иконка"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>
						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder="Описание"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) || 'Описание пусто!',
								},
							}}
						/>
						<Button>Обновить</Button>*/}
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
