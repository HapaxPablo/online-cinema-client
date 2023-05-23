import MainProvider from '../app/providers/MainProvider'
import type { AppProps } from 'next/app'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '../app/assets/styles/globals.scss'
import { useEffect } from 'react'
import api from './api'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await api.get('/some-endpoint'); // Выполняем запрос на сервер Nest.js
			console.log(response.data);
		  } catch (error) {
			console.error(error);
		  }
		};
	
		fetchData();
	  }, []);

	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
