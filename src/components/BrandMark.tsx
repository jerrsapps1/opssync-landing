type Props = { size?: number; title?: string };

export default function BrandMark({ size = 18, title = "OpsSync" }: Props) {
  const px = `${size}px`;
  return (
    <span
      className="inline-block align-middle"
      style={{ width: px, height: px, lineHeight: 0 }}
    >
      <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label={title}>
        <defs>
          <filter id="bm-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#10B981"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
          <linearGradient id="bm-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#06B6D4"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
          <radialGradient id="bm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#22D3EE" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* soft glow */}
        <circle cx="32" cy="34" r="20" fill="url(#bm-glow)" filter="url(#bm-blur)">
          <animate attributeName="opacity" values="0.45;0.15;0.45" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* shield */}
        <path
          d="M32 6 L54 16 V34c0 11-8 20-22 26C18 54 10 45 10 34V16z"
          fill="url(#bm-grad)"
          stroke="url(#bm-stroke)"
          strokeWidth={2}
        />

        {/* rotating radar sweep */}
        <g transform="rotate(0 32 32)" opacity={0.6}>
          <path
            d="M32 14 A18 18 0 0 1 50 32"
            fill="none"
            stroke="url(#bm-stroke)"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="6s"
            repeatCount="indefinite"
          />
        </g>

        {/* check */}
        <path
          d="M24 33 l7 7 14-18"
          fill="none"
          stroke="#fff"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
