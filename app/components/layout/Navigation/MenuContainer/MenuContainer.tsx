import dynamic from 'next/dynamic';
import { FC } from 'react';

import Menu from './Menu';
import { menus } from './menu.data';

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu') as any, {
	ssr: false,
});

const MenuContainer: FC = () => {
	const GenreMenuComponent = DynamicGenreMenu as FC;

	return (
		<div>
			<Menu menu={menus[0]} />
			<GenreMenuComponent />
			<Menu menu={{ title: 'Главное', items: [] }} />
		</div>
	);
};

export default MenuContainer;
