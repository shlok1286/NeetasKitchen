export default function PageHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl leading-tight text-[color:var(--color-primary)] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[color:var(--color-secondary)]">{description}</p>
      ) : null}
    </div>
  )
}
