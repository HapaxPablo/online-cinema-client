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
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'Главное' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
