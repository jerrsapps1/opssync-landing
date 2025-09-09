// src/components/BrandMark.tsx
export default function BrandMark({ size = 96 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="OpsSync brand mark"
      focusable="false"
    >
      <defs>
        <radialGradient id="radGlow" cx="0" cy="0" r="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0EA5E9" stopOpacity=".25" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring" x1="-64" y1="-64" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#68D6FF" />
          <stop offset="1" stopColor="#6FEAD8" />
        </linearGradient>
        <linearGradient id="sweepGrad" x1="0" y1="0" x2="90" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#68D6FF" stopOpacity=".9" />
          <stop offset="1" stopColor="#68D6FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="shieldFill" x1="-40" y1="-64" x2="40" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0ECF9A" />
          <stop offset="1" stopColor="#079269" />
        </linearGradient>
        <linearGradient id="shieldStroke" x1="-42" y1="-66" x2="42" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#39E2B4" />
          <stop offset="1" stopColor="#17B58A" />
        </linearGradient>
        <filter id="shieldGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <g transform="translate(128 128)">
        <circle r="96" fill="url(#radGlow)" />

        <ellipse rx="86" ry="60" fill="#12D1A0" opacity=".35" filter="url(#shieldGlow)" />
        <path
          d="M 0 -76 L 64 -40 V 24 C 64 52 36 76 0 90 C -36 76 -64 52 -64 24 V -40 Z"
          fill="url(#shieldFill)"
          opacity=".9"
        />
        <path
          d="M 0 -76 L 64 -40 V 24 C 64 52 36 76 0 90 C -36 76 -64 52 -64 24 V -40 Z"
          fill="none"
          stroke="url(#shieldStroke)"
          strokeWidth={8}
          opacity=".95"
        />

        <g fill="none" stroke="url(#ring)" strokeOpacity=".9">
          <circle r="64" strokeWidth={4} />
          <circle r="44" strokeWidth={3} />
          <circle r="24" strokeWidth={2.5} />
        </g>

        <g>
          <g>
            <path d="M0 0 L90 0 L90 10 L0 0 Z" fill="url(#sweepGrad)" opacity=".75" />
            <line x1="0" y1="0" x2="90" y2="0" stroke="url(#ring)" strokeWidth={6} strokeLinecap="round" opacity=".95" />
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
          </g>
        </g>

        <path
          d="M -36 10 L -6 40 L 44 -16"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
