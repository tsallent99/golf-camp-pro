export default function ArcGraphic({ showLabels = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 300 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 100 Q80 -10 280 100"
        stroke="#D94F2B"
        strokeWidth="2"
        fill="none"
        strokeDasharray="400"
        strokeDashoffset="400"
        className="animate-draw"
      />
      {showLabels && (
        <>
          <text
            x="150"
            y="16"
            textAnchor="middle"
            fontFamily="DM Mono, monospace"
            fontSize="9"
            fill="#D94F2B"
            letterSpacing="0.1em"
          >
            APEX
          </text>
          <text
            x="280"
            y="95"
            textAnchor="end"
            fontFamily="DM Mono, monospace"
            fontSize="9"
            fill="#D94F2B"
            letterSpacing="0.1em"
          >
            CARRY
          </text>
        </>
      )}
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-draw {
            stroke-dashoffset: 0;
            animation: none;
          }
        }
      `}</style>
    </svg>
  )
}
