import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	console.log('Rendering Home component')
	return (
		<Meta title='nothing' description='kek'>
			<Heading
				title='Смотреть фильмы онлайн'
				className='text-gray-300 mb-8 text-xl'
			/>
		</Meta>
	)
}

export default Home
