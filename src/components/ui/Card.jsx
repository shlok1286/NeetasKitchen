export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 shadow-[0_20px_40px_rgba(29,29,27,0.06)] ${hover ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/30 hover:shadow-[0_25px_55px_rgba(29,29,27,0.08)]' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
