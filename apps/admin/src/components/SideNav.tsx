import React from 'react'
import {Link} from 'react-router-dom';
import { flexContainer } from './SideNav.css'

const SideNav = () => {
  return (
    <nav className={flexContainer}>
      <Link to={'/'}>대시보드</Link>
      <Link to={'/create-work'}>공고등록</Link>
      <Link to={'/search'}>인재검색</Link>
      <Link to={'/work-management'}>공고관리</Link>
      <Link to={'/recruit-management'}>채용관리</Link>
    </nav>
  )
}

export default SideNav