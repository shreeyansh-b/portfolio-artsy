import { useState, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

type FillState = 'idle' | 'entered' | 'leaving'

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function AnimatedLink({ children, className = '', onBlur, onFocus, onMouseEnter, onMouseLeave, ...props }: AnimatedLinkProps) {
  const [fillState, setFillState] = useState<FillState>('idle')

  return (
    <a
      {...props}
      className={`round-link ${className}`}
      data-fill-state={fillState}
      onBlur={(event) => {
        setFillState('leaving')
        onBlur?.(event)
      }}
      onFocus={(event) => {
        setFillState('entered')
        onFocus?.(event)
      }}
      onMouseEnter={(event) => {
        setFillState('entered')
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        setFillState('leaving')
        onMouseLeave?.(event)
      }}
      onTransitionEnd={(event) => {
        if (fillState === 'leaving' && event.propertyName === 'transform' && event.target === event.currentTarget) {
          setFillState('idle')
        }
      }}
    >
      <span className="button-label">{children}</span>
    </a>
  )
}

type AnimatedRouteLinkProps = {
  children: ReactNode
  className?: string
  to: '/about'
}

export function AnimatedRouteLink({ children, className = '', to }: Readonly<AnimatedRouteLinkProps>) {
  const [fillState, setFillState] = useState<FillState>('idle')

  return (
    <Link
      className={`round-link ${className}`}
      data-fill-state={fillState}
      onBlur={() => setFillState('leaving')}
      onFocus={() => setFillState('entered')}
      onMouseEnter={() => setFillState('entered')}
      onMouseLeave={() => setFillState('leaving')}
      onTransitionEnd={(event) => {
        if (fillState === 'leaving' && event.propertyName === 'transform' && event.target === event.currentTarget) {
          setFillState('idle')
        }
      }}
      resetScroll={true}
      to={to}
    >
      <span className="button-label">{children}</span>
    </Link>
  )
}
