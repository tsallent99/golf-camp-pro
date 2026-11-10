export default function DataTag({ children, variant = 'outline', className = '' }) {
  const base = 'inline-block font-mono text-xs uppercase tracking-widest px-3 py-1.5'
  const variants = {
    outline: 'border-[1.5px] border-current',
    solid: 'bg-flag text-pine',
  }

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
