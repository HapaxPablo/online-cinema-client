import Image from "next/image"
import Link from 'next/link'
import { FC } from 'react'
import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
        <Link legacyBehavior href='/'>
			<a className='px-layout mb-10 block'>
				<Image
                    src={logoImage}
                    width={247}
                    height={34}
                    alt='Online Cinema'
                    draggable={false}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
			</a>
		</Link>
    );
}

export default Logo
