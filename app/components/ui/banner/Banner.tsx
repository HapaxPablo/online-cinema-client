import Image from "next/image"
import { FC } from 'react'
import styles from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ imagePath, Detail }) => {
	return (
        <div className={styles.banner}>
			<Image
                alt=""
                src={imagePath}
                draggable={false}
                className="image-like-bg object-top"
                unoptimized
                priority
                fill
                sizes="100vw" />
			{Detail && <Detail />}
		</div>
    );
}

export default Banner
