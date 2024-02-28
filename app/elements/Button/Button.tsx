import { PropsWithChildren } from 'react'
import classnames from 'classnames'

type ButtonProps = PropsWithChildren<{
    color?: string
    size?: string
    onClick?: string
    disabled?: boolean
    className?: string
    icon?: string
}>

const Button = (props: ButtonProps) => {
    const { size, color, children, icon, disabled, className: passedClasses, ...rest } = props
    const classes = classnames(
        'focus:ring-2 focus:ring-offset-2 outline-0 transition-colors mr-2 mb-2 rounded disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed',
        {
            'rounded-lg track-wide px-6 py-5 text-3xl': size === 'xxl',
            'rounded-lg px-5 py-3.5 text-2xl': size === 'xl',
            'rounded-md px-3 py-2 text-xl': size === 'lg',
            'rounded-md px-2.5 py-1.5 text-md': size === 'md',
            'rounded px-2.5 py-1.5 text-sm': size === 'sm',
            'rounded px-2 py-1 text-xs': size === 'xs',
        },
        {
            'bg-slate-900 text-white hover:bg-primary-hover focus:bg-primary-focus focus:ring-primary': color === 'primary',
            'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active focus:bg-secondary-focus focus:ring-secondary': color === 'secondary',
            'bg-tertiary text-tertiary-text active:text-white hover:bg-tertiary-hover active:bg-tertiary-active focus:bg-tertiary-focus focus:ring-tertiary':
                color === 'tertiary',
            'bg-accent text-white hover:bg-accent-hover active:bg-accent-active focus:bg-accent-focus focus:ring-accent': color === 'accent',
            'bg-success text-white hover:bg-success-hover active:bg-success-active focus:bg-success-focus focus:ring-success': color === 'success',
            'bg-danger text-white hover:bg-danger-hover active:bg-danger-active focus:bg-danger-focus focus:ring-danger': color === 'danger',
            'bg-warning text-white hover:bg-warning-hover active:bg-warning-active focus:bg-warning-focus focus:ring-warning': color === 'warning',
            'bg-info text-white hover:bg-info-hover active:bg-info-active focus:bg-info-focus focus:ring-info': color === 'info',
        },
        passedClasses
    )

    return (
        <button type="button" className={classes} disabled={disabled}>
            {props.children}
            {icon}
        </button>
    )
}

Button.defaultProps = {
    color: 'primary',
    size: 'md',
}


export default Button
