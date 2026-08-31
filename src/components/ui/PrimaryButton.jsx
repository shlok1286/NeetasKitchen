import { Link } from 'react-router-dom'

export default function PrimaryButton({ children, href, className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-hover)]'
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
