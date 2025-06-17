import React from 'react';

export const WhiteBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gray-100 light-mode-only">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200" />
      
      {/* Clouds */}
      <div className="absolute inset-0">
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
        <div className="cloud cloud4" />
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>

      {/* Rain */}
      <div className="absolute inset-0 rain-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="raindrop" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>

      <style>
        {`
          .light-mode-only {
            display: none;
          }

          :root:not(.dark) .light-mode-only {
            display: block !important;
          }

          /* Cloud styles */
          .cloud {
            position: absolute;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50px;
            filter: blur(8px);
            opacity: 0.9;
            animation: float-cloud 30s linear infinite;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }

          .cloud:before,
          .cloud:after {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }

          .cloud1 {
            width: 200px;
            height: 60px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
          }

          .cloud2 {
            width: 300px;
            height: 80px;
            top: 20%;
            right: 15%;
            animation-delay: -10s;
          }

          .cloud3 {
            width: 250px;
            height: 70px;
            top: 15%;
            left: 40%;
            animation-delay: -5s;
          }

          .cloud4 {
            width: 180px;
            height: 50px;
            top: 25%;
            right: 40%;
            animation-delay: -15s;
          }

          /* Wave styles */
          .wave {
            position: absolute;
            width: 200%;
            height: 100px;
            background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
            border-radius: 50%;
            animation: wave-animation 10s linear infinite;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }

          .wave1 {
            bottom: 0;
            animation-delay: 0s;
          }

          .wave2 {
            bottom: 20px;
            animation-delay: -3s;
            opacity: 0.8;
          }

          .wave3 {
            bottom: 40px;
            animation-delay: -6s;
            opacity: 0.6;
          }

          /* Rain styles */
          .rain-container {
            overflow: hidden;
          }

          .raindrop {
            position: absolute;
            width: 2px;
            height: 20px;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
            animation: rain 1s linear infinite;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }

          @keyframes float-cloud {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(calc(100vw + 100%));
            }
          }

          @keyframes wave-animation {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes rain {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}
      </style>
    </div>
  );
};
