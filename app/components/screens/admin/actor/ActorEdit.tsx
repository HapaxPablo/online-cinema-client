import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import generateSlug from '@/utils/string/generateSlug'
import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import formStyles from '@/ui/from-elements/admin-form.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Field from '@/components/ui/from-elements/Field'
import SlugField from '@/components/ui/from-elements/SlugField/SlugField'
import UploadField from '@/components/ui/from-elements/UploadField/UploadField'
import Button from '@/components/ui/from-elements/Button'

const ActorEdit: FC = () => {
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
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			{isLoading ? (
				<SkeletonLoader count={3} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<Field
							{...register('name', {
								required: 'Name is required!',
							})}
							placeholder="Name"
							error={errors.name}
						/>
						<SlugField
							generate={() => setValue('slug', generateSlug(getValues('name')))}
							register={register}
							error={errors.slug}
						/>
						<Controller
							name="photo"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Photo"
									error={error}
									folder="actors"
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Photo is required!',
							}}
						/>
					</div>

					<Button>Update</Button>
				</form>
			)}
		</Meta>
	)
}

export default ActorEdit
