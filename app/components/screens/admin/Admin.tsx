import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import styles from './Admin.module.scss'
import Statistics from './Statistics/Statistics'

const Admin:FC = () => {
  return <Meta title='Admin Panel'>
    <AdminNavigation />
    <Heading title='Статистика'/>
    <Statistics />
  </Meta>
}

export default Admin
