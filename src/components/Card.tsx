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
    <section className={`rounded-md px-3 py-4 shadow-md ${className}`}>
      {title && (
        <h2 className="text-xl  font-normal text-left  text-[rgb(0 0 0 / 90%)]">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
