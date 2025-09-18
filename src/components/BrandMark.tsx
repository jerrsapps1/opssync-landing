type Props = {
  /** Square size in pixels */
  size?: number;
  /** Accessible title (optional) */
  title?: string;
};

export default function BrandMark({ size = 18, title = "OpsSync mark" }: Props) {
  const px = `${size}px`;
  return (
    <span
      className="inline-block align-middle"
      style={{ width: px, height: px, lineHeight: 0 }}
      aria-hidden={title ? undefined : true}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        role={title ? "img" : undefined}
        aria-label={title || undefined}
      >
        <defs>
          <filter id="bm-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="bm-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          <radialGradient id="bm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>{`
          @keyframes bm-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes bm-pulse { 0%,100% { opacity:.55; } 50% { opacity:.2; } }
          .bm-sweep { transform-origin: 32px 32px; animation: bm-sweep 6s linear infinite; }
          .bm-glow { animation: bm-pulse 3.2s ease-in-out infinite; }
        `}</style>

        <circle className="bm-glow" cx="32" cy="34" r="20" fill="url(#bm-glow)" filter="url(#bm-blur)" />

        <path
          d="M32 6 L54 16 V34c0 11-8 20-22 26C18 54 10 45 10 34V16z"
          fill="url(#bm-grad)"
          stroke="url(#bm-stroke)"
          strokeWidth={2}
        />

        <g className="bm-sweep" opacity={0.6}>
          <path
            d="M32 14 A18 18 0 0 1 50 32"
            fill="none"
            stroke="url(#bm-stroke)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>

        <path
          d="M24 33 l7 7 14-18"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
