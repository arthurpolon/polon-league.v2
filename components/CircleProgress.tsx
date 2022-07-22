interface ICircleProgressProps {
  percentage: number;
}

const CircleProgress = (props: ICircleProgressProps) => {
  return (
    <svg width={160} height={160} viewBox="0 0 36 36">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        strokeWidth={2.8}
        strokeLinecap="round"
        stroke="url(#gradient)"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        strokeDasharray={`${props.percentage}, 100`}
      />
    </svg>
  );
};

export default CircleProgress;
