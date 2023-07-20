import React from 'react'
import UseNewsLetterController from './NewsLetter.controller'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
    const {Actions, States} = UseNewsLetterController()
  return (
    <div>NewsLetter</div>
  )
}

export default NewsLetter