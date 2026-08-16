import { useState, type AnchorHTMLAttributes, type ReactNode } from 'react'

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
