export default function ImagePlaceholder({
  src,
  alt,
  title,
  gujaratiTitle,
  aspectRatio = 'aspect-[3/2]',
  dimensions = '1200 x 800',
  className = '',
}) {
  return (
    <div className={`${aspectRatio} relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-[0_20px_40px_rgba(29,29,27,0.06)] ${className}`.trim()}>
      {src ? (
        <img
          src={src}
          alt={alt || title}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col justify-between p-8 text-left">
          <div className="space-y-4">
            <div className="h-1.5 w-16 rounded-full bg-[color:var(--color-accent)]/20" />
            <div className="space-y-2">
              <p className="text-lg font-semibold tracking-tight text-[color:var(--color-primary)]">
                {title}
              </p>
              {gujaratiTitle && (
                <p className="font-gujarati text-sm text-[color:var(--color-secondary)]">
                  ({gujaratiTitle})
                </p>
              )}
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-secondary)]/70">
            {dimensions}
          </p>
        </div>
      )}
    </div>
  )
}
