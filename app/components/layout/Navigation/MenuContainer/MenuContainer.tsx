import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { menus } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menus[0]} />
			<DynamicGenreMenu />
<<<<<<< HEAD
			<Menu menu={{ title: 'Главное', items: [] }} />
=======
			<Menu menu={{ title: 'Generals', items: [] }} />
>>>>>>> 93eb52ade1f4412143ed7f2a9a73df2b728044a7
		</div>
	)
}

export default MenuContainer
