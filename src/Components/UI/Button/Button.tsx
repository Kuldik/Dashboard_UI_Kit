import React from 'react'
import styles from './Button.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  backgroundColor?: string
  padding?: string
  color?: string
  textAlign?: string
  borderRadius?: string
  textColor?: string
  hoverBackgroundColor?: string
  hoverTextColor?: string
}

export const Button = ({
  text,
  backgroundColor,
  padding,
  color,
  hoverBackgroundColor,
  hoverTextColor,
  ...props
}: Props) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor,
        padding,
        color,
        borderRadius: props.borderRadius,
        transition: 'all 0.2s ease-in', 
      }}
      onMouseOver={(e) => {
        if (hoverBackgroundColor) {
          e.currentTarget.style.backgroundColor = hoverBackgroundColor;
        }
        if (hoverTextColor) {
          e.currentTarget.style.color = hoverTextColor;
        }
      }}
      onMouseOut={(e) => {
        if (hoverBackgroundColor) {
          e.currentTarget.style.backgroundColor = backgroundColor ?? '';
        }
        if (hoverTextColor) {
          e.currentTarget.style.color = color ?? '';
        }
      }}
      {...props}
    >
      {text}
    </button>
  )
}