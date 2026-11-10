export default function Logo({ variant = 'horizontal', tone = 'dark', className = '' }) {
  // Colors from the actual logo files
  const stroke = tone === 'light' ? '#F7F6F1' : '#12302A'
  const ballFill = tone === 'light' ? '#F2C318' : '#D9A800'

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="MidAm Golf Retreat"
      >
        <path d="M3.5 27 C 9 9, 31 5, 42.5 17.5" stroke={stroke} strokeWidth="4.2" fill="none" strokeLinecap="round" />
        <path d="M24.5 12.5 L 22 44" stroke={stroke} strokeWidth="3.6" fill="none" strokeLinecap="round" />
        <circle cx="44" cy="23.5" r="3.4" fill={ballFill} />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 230 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MidAm Golf Retreat"
    >
      <g transform="translate(0,4) scale(1.17)">
        <path d="M3.5 27 C 9 9, 31 5, 42.5 17.5" stroke={stroke} strokeWidth="4.2" fill="none" strokeLinecap="round" />
        <path d="M24.5 12.5 L 22 44" stroke={stroke} strokeWidth="3.6" fill="none" strokeLinecap="round" />
        <circle cx="44" cy="23.5" r="3.4" fill={ballFill} />
      </g>
      <text
        x="66"
        y="38"
        fill={stroke}
        fontFamily="Archivo, 'Arial Narrow', sans-serif"
        fontWeight="850"
        fontSize="40"
        style={{ fontStretch: '70%' }}
      >
        MidAm
      </text>
      <text
        x="67"
        y="55"
        fill={stroke}
        fontFamily="'DM Mono', monospace"
        fontSize="10"
        letterSpacing="3.2"
      >
        GOLF RETREAT
      </text>
    </svg>
  )
}
