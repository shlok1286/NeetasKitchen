import { Link } from 'react-router-dom'

export default function SecondaryButton({ children, href, className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]'
  const isExternal = href && /^(?:https?:|mailto:|tel:)/.test(href)

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={`${baseClasses} ${className}`.trim()} {...props}>
          {children}
        </a>
      )
    }

    return (
      <Link to={href} className={`${baseClasses} ${className}`.trim()} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
