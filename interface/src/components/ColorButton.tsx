import React from 'react'
import type { ButtonColor } from '../types';

interface ColorButtonProps {
  color: ButtonColor,
  currentColor: ButtonColor,
  setCurrentColor: React.Dispatch<React.SetStateAction<ButtonColor>>
}

const ColorButton = (props: ColorButtonProps) => {

  const butttonColors = {
    "yellow": "#E6CA97",
    "white": "#D9D9D9",
    "rose": "#E1A4A9"
  }

  const handleColorChange = (color: ButtonColor) => {
    props.setCurrentColor(color)
  };
  
  return (
    <button
      className={`color-button ${props.color === props.currentColor ? "selected" : ""}`}
      style={{ backgroundColor: butttonColors[props.color] }}
      onClick={() => handleColorChange(props.color)}>
      
      </button>
  )
}

export default ColorButton