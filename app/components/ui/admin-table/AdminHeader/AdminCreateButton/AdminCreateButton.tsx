import Button from '@/components/ui/from-elements/Button'
import { FC } from 'react'

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать</Button>
}

export default AdminCreateButton
