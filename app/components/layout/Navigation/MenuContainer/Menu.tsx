import dynamic from 'next/dynamic'
import { FC } from 'react'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
<<<<<<< HEAD
				{title === 'Главное' ? <DynamicAuthItems /> : null}
=======
				{title === 'Generals' ? <DynamicAuthItems /> : null}
>>>>>>> 93eb52ade1f4412143ed7f2a9a73df2b728044a7
			</ul>
		</div>
	)
}

export default Menu