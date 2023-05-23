import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  error?: FieldError
}

export interface IField extends IFieldProps {}
