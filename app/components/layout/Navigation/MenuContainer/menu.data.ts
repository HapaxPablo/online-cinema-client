import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Жанры',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Популярные фильмы',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Популярно сейчас',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Главное',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
