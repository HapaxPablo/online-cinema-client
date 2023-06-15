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
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'
import formStyles from '../../../ui/from-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'

const DynamicTextEditor = dynamic(
	() =>
		import('@/components/ui/from-elements/TextEditor').then(
			(module) => module.default
		),
	{
		ssr: false,
	}
)	

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Нет названия!',
								})}
								placeholder="Название"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Нет иконки(MdIcon)!',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>
						<Controller
							name="description"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									placeholder="Описание"
									onChange={onChange}
									error={error}
									value={value}
								/>
								
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) || 'Нет описания!',
								},
							}}
						/>
						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default GenreEdit
