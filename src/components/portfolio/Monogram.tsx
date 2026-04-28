interface MonogramProps {
  size?: number;
  variant?: "emerald" | "cream";
}

const Monogram = ({ size = 220, variant = "emerald" }: MonogramProps) => {
  const stroke = variant === "emerald" ? "hsl(var(--cream-soft))" : "hsl(var(--emerald))";
  const gold = "hsl(var(--gold))";

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-label="Pedro I. Hernández monogram"
      className="select-none"
    >
      <defs>
        <linearGradient id="mono-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gold} stopOpacity="0.95" />
          <stop offset="100%" stopColor={gold} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="100" cy="100" r="92" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="url(#mono-grad)" strokeWidth="1.25" />

      {/* Letters PIH */}
      <g fontFamily="Outfit, sans-serif" fontWeight="500" fill={stroke} textAnchor="middle">
        <text x="62" y="118" fontSize="76" letterSpacing="-3">P</text>
        <text x="100" y="118" fontSize="76" letterSpacing="-3" fill="url(#mono-grad)">I</text>
        <text x="138" y="118" fontSize="76" letterSpacing="-3">H</text>
      </g>

      {/* Tick marks */}
      <g stroke={stroke} strokeOpacity="0.5" strokeWidth="1">
        <line x1="100" y1="14" x2="100" y2="22" />
        <line x1="100" y1="178" x2="100" y2="186" />
        <line x1="14" y1="100" x2="22" y2="100" />
        <line x1="178" y1="100" x2="186" y2="100" />
      </g>

      {/* Bottom label */}
      <text
        x="100"
        y="158"
        fontFamily="Figtree, sans-serif"
        fontSize="6.5"
        letterSpacing="6"
        textAnchor="middle"
        fill={stroke}
        opacity="0.7"
      >
        EST · PMP · LEAD AUDITOR
      </text>
    </svg>
  );
};

export default Monogram;
