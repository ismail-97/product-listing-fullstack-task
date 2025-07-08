import React from 'react'
import ColorButton from './ColorButton'
import type { ButtonColor } from '../types'

interface ButtonSetProps {
  currentColor: ButtonColor,
  setCurrentColor: React.Dispatch<React.SetStateAction<ButtonColor>>
}


const ButtonSet = (props: ButtonSetProps) => {
  return (
    <div className='mb-2'>
        <ColorButton color="yellow" setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} />
        <ColorButton color="white" setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} />
        <ColorButton color="rose" setCurrentColor={props.setCurrentColor} currentColor={props.currentColor}/>        
    </div>     
  )
}

export default ButtonSet