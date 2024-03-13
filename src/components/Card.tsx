export function Card({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) {
  return (
    <article className={`rounded-md  shadow-md ${className}`}>
      {title && (
        <h2 className="text-xl  font-normal text-left  text-[rgb(0 0 0 / 90%)]">
          {title}
        </h2>
      )}
      {children}
    </article>
  )
}
