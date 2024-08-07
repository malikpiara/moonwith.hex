'use client';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export default function GameWindow() {
  const [playerPosition, setPlayerPosition] = useState(500);
  const [isArrowActive, setIsArrowActive] = useState(false);
  const [initialArrowPosition, setInitialArrowPosition] = useState(null);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case ' ':
        event.preventDefault();
        setInitialArrowPosition(playerPosition);
        setIsArrowActive(true);
        break;
      case 'ArrowRight':
        event.preventDefault();
        setPlayerPosition((prevPosition) => Math.min(prevPosition + 40, 3000));
        break;
      case 'ArrowLeft':
        event.preventDefault();
        setPlayerPosition((prevPosition) => Math.max(prevPosition - 40, 0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  return (
    <>
      <div className='relative flex m-auto bg-[#060f20] w-full h-full rounded-xl max-w-6xl max-h-[35rem] z-50 overflow-hidden'>
        <Character position={playerPosition} />
        <Character color='bg-blue-600' position={800} />

        <Ball xPosition={'left-20'} />

        {/* <Ball size={'small'} /> */}

        {isArrowActive && (
          <Arrow
            initialPosition={initialArrowPosition}
            setIsArrowActive={setIsArrowActive}
          />
        )}
      </div>
    </>
  );
}

const Character = ({ color = 'bg-pink-600', position }: any) => {
  return (
    <>
      <div
        className={classNames(
          'absolute w-14 h-14 rounded-t-full bottom-0 z-10',
          color,
          'transition-all',
          'hover:animate-pulse',
          'ease-in-out'
        )}
        style={{ transform: `translateX(${position}px)` }}
      />
    </>
  );
};

const Ball = ({
  color = 'bg-yellow-500',
  size = 'medium',
  xPosition = 'left-16',
}: any) => {
  if (size === 'medium') {
    size = 'w-40 h-40';
  } else {
    size = 'w-20 h-20';
  }
  return (
    <>
      <div
        className={classNames(
          'absolute rounded-full bottom-80',
          size,
          color,
          xPosition,
          'transition-all'
        )}
        style={{
          animation:
            'moveX 4.05s linear 0s infinite alternate, moveY 1.4s linear 0s infinite alternate',
        }}
      />
    </>
  );
};

const Arrow = ({ initialPosition, setIsArrowActive }) => {
  initialPosition = `translateX(${initialPosition}px)`;

  useEffect(() => {
    // Add animation logic here (e.g., CSS transition/animation)

    // Example with setTimeout:
    const timeoutId = setTimeout(() => {
      setIsArrowActive(false); // Hide arrow after animation
    }, 1000); // Adjust timeout as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ transform: initialPosition }}>
      <svg
        className='absolute text-white bottom-25 left-4 -z-10'
        style={{
          animation: 'arrowAttack 1s linear 0s',
        }}
        viewBox='239.515 95.492 18.685 332.098'
        width='18.685'
        height='332.098'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M 248.857 95.492 L 248.857 427.59 M 248.857 95.492 L 258.2 106.845 M 248.857 95.492 L 239.515 106.845'
        />
      </svg>
    </div>
  );
};
