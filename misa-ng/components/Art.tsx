export default function Art({ i = 0, className = '' }: { i?: number; className?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      <defs><linearGradient id={`g${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0A0F17" /><stop offset="1" stopColor="#A85F08" stopOpacity=".75" /></linearGradient></defs>
      <rect width="400" height="500" fill={`url(#g${i})`} />
      <circle cx={90 + i * 45} cy="320" r="62" fill="#FFB52A" opacity=".45" />
      {[0, 1, 2, 3, 4].map((k) => (
        <g key={k}>
          <rect x={30 + k * 72} y={190 + ((k * 37 + i * 53) % 130)} width="58" height="320" fill="#0D121B" stroke="#252D3A" />
          {[0, 1, 2, 3].map((r) => <rect key={r} x={42 + k * 72} y={210 + ((k * 37 + i * 53) % 130) + r * 38} width="10" height="14" fill="#F59A16" opacity={(k + r + i) % 3 ? 0.8 : 0.15} />)}
        </g>
      ))}
    </svg>
  );
}
