import { FC } from 'react'
import { MdDragIndicator } from 'react-icons/md'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'
import { useRenderClient } from '@/hooks/useRenderClient'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	let IconComponent

	if (MaterialIcons.hasOwnProperty(name)) {
		IconComponent = MaterialIcons[name]
	} else {
		IconComponent = MdDragIndicator
	}

	if (isRenderClient) {
		return <IconComponent />
	} else {
		return null
	}
}
