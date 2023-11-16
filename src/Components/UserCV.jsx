import React from 'react'
import Contacts from './Contacts'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import  './UserCV.css'
const UserCV = () => {
  return (
    <div className='all-div'>
        <PersonalInfo/>
        <Experience/>
        <Contacts/>

    </div>
  )
}

export default UserCV