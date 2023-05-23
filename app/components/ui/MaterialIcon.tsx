import { FC } from 'react'
import { MdDragIndicator } from 'react-icons/md'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name] || MdDragIndicator

	return <IconComponent />
}
