import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceHolder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`} legacyBehavior>
			<a className={styles.btn}>Войти</a>
		</Link>
	)
}

export default AuthButton
