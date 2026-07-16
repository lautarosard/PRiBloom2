interface FloralCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function FloralCorner({ position, className = '' }: FloralCornerProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 rotate-0';
      case 'top-right':
        return 'top-0 right-0 -scale-x-100';
      case 'bottom-left':
        return 'bottom-0 left-0 -scale-y-100';
      case 'bottom-right':
        return 'bottom-0 right-0 -scale-x-100 -scale-y-100';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none opacity-25 md:opacity-40 z-10 w-24 h-24 md:w-36 md:h-36 ${getPositionClasses()} ${className} transition-all duration-300`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-sakura-300"
      >
        {/* Main branch */}
        <path
          d="M0,0 C20,10 30,30 45,45 C60,60 80,75 100,80"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Side twigs */}
        <path
          d="M20,10 C25,5 35,5 40,8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M35,35 C45,30 55,32 60,28"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M55,55 C65,50 75,55 80,50"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Blossom 1 (Big) at (45, 45) */}
        <g transform="translate(45, 45) scale(1.1)">
          <path
            d="M0,-8 C-3,-4 -7,-4 -5,0 C-3,4 -3,8 0,6 C3,8 3,4 5,0 C7,-4 3,-4 0,-8 Z"
            fill="#fff0f2"
            stroke="#f86f86"
            strokeWidth="0.8"
          />
          <path
            d="M-8,0 C-4,-3 -4,-7 0,-5 C4,-3 8,-3 6,0 C8,3 4,3 0,5 C-4,7 -4,3 -8,0 Z"
            fill="#fff0f2"
            stroke="#f86f86"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="0" r="2.5" fill="#f86f86" />
          <circle cx="0.8" cy="-0.8" r="0.8" fill="#ec4863" />
          <circle cx="-0.8" cy="0.8" r="0.8" fill="#ec4863" />
        </g>

        {/* Blossom 2 (Medium) at (25, 7) */}
        <g transform="translate(30, 7) scale(0.8)">
          <path
            d="M0,-8 C-3,-4 -7,-4 -5,0 C-3,4 -3,8 0,6 C3,8 3,4 5,0 C7,-4 3,-4 0,-8 Z"
            fill="#fff5f6"
            stroke="#f86f86"
            strokeWidth="0.7"
          />
          <circle cx="0" cy="0" r="1.8" fill="#ffa3b1" />
        </g>

        {/* Blossom 3 (Small) at (60, 28) */}
        <g transform="translate(60, 28) scale(0.7)">
          <path
            d="M0,-8 C-3,-4 -7,-4 -5,0 C-3,4 -3,8 0,6 C3,8 3,4 5,0 C7,-4 3,-4 0,-8 Z"
            fill="#fff5f6"
            stroke="#f86f86"
            strokeWidth="0.7"
          />
          <circle cx="0" cy="0" r="1.5" fill="#ffa3b1" />
        </g>

        {/* Buds and dots representing falling stamens or small details */}
        <circle cx="40" cy="8" r="1.5" fill="#ec4863" />
        <circle cx="80" cy="50" r="1.8" fill="#ec4863" />
        <circle cx="15" cy="22" r="1" fill="#ffa3b1" />
        <circle cx="50" cy="25" r="1.2" fill="#ffccd4" />
        <circle cx="72" cy="40" r="1" fill="#f86f86" />
      </svg>
    </div>
  );
}
