import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Button from '@/components/ui/from-elements/Button'
import Field from '@/components/ui/from-elements/Field'
import SlugField from '@/components/ui/from-elements/SlugField/SlugField'
import UploadField from '@/components/ui/from-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'
import formStyles from '@/ui/from-elements/admin-form.module.scss'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { onSubmit, isLoading } = useMovieEdit(setValue)
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres()
	const { data: actors, isLoading: isActorsLoading } = useAdminActors()

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			{isLoading ? (
				<SkeletonLoader count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							{...register('title', {
								required: 'Нужно название!',
							})}
							placeholder="Название"
							error={errors.title}
						/>
						<SlugField
							generate={() =>
								setValue('slug', generateSlug(getValues('title')))
							}
							register={register}
							error={errors.slug}
						/>
						<Field
							{...register('parameters.country', {
								required: 'Нужна страна!',
							})}
							placeholder="Страна"
							error={errors.parameters?.country}
							style={{ width: '31%' }}
						/>
						<Field
							{...register('parameters.duration', {
								required: 'Нужна продолжительность!',
							})}
							placeholder="Продолжительность (мин.)"
							error={errors.parameters?.duration}
							style={{ width: '31%' }}
						/>
						<Field
							{...register('parameters.year', {
								required: 'Нужен год входа!',
							})}
							placeholder="Год выхода"
							error={errors.parameters?.year}
							style={{ width: '31%' }}
						/>

						<Controller
							name="genres"
							control={control}
							rules={{
								required: 'Выберите хотя бы один жанр!',
							}}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Жанры"
									options={genres || []}
									isLoading={isGenresLoading}
									isMulti
								/>
							)}
						/>
						<Controller
							name="actors"
							control={control}
							rules={{
								required: 'Выберите хотя бы одного актёра!',
							}}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Актёры"
									options={actors || []}
									isLoading={isActorsLoading}
									isMulti
								/>
							)}
						/>

						<Controller
							name="poster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Постер"
									error={error}
									folder="movies"
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Нужен постер!',
							}}
						/>

						<Controller
							name="bigPoster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Большой постер"
									error={error}
									folder="movies"
									image={value}
									onChange={onChange}
									
								/>
							)}
							rules={{
								required: 'Нужен большой постер!',
							}}
						/>

						<Controller
							name="videoUrl"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Видео"
									error={error}
									folder="movies"
									image={value}
									onChange={onChange}
									style={{ marginTop: -25 }}
									isNoImage = {true}
								/>
							)}
							rules={{
								required: 'Нужно видео!',
							}}
						/>
					</div>

					<Button>Сохранить</Button>
				</form>
			)}
		</Meta>
	)
}

export default MovieEdit
