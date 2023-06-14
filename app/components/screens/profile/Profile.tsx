import AuthFields from '@/components/layout/Navigation/MenuContainer/auth/AuthFields'
import Button from '@/components/ui/from-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IProfileInput } from './profile.interface'
import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

const Profile: FC = () => {
  const {handleSubmit, register, formState, setValue} = useForm<IProfileInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useProfile(setValue)

  return (
      <Meta title='Profile'>
        <Heading title='Профиль' className='mb-6' />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {isLoading ? <SkeletonLoader count={2}/> : 
          <AuthFields
            formState={formState}
            register={register}
            isPasswordRequired
          />}
          <Button>
            Обновить
          </Button>
        </form>
    </Meta>
  )

}

export default Profile
 