import React from 'react';

const SquishyIcon: React.FC = () => {
    return (
        <div className="relative w-20 h-20">
            {/* Shadow element */}
            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/30 rounded-[50%] blur-md"></div>
            {/* Icon element */}
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-sky-400 drop-shadow-lg relative"
                fill="currentColor"
            >
                <path
                    d="M48.4,-56.3C61.4,-47.3,70,-31.1,72.9,-14.2C75.8,2.7,73,19.9,64.2,33.5C55.4,47.2,40.6,57.3,25.2,63.1C9.8,68.9,-6.2,70.4,-21.8,65.6C-37.4,60.8,-52.6,49.7,-61.7,35.3C-70.8,20.9,-73.8,3.2,-69.9,-12.3C-66,-27.8,-55.1,-41.1,-42.2,-49.6C-29.3,-58.1,-14.6,-61.7,1.8,-63.3C18.2,-64.8,36.4,-65.3,48.4,-56.3Z"
                    transform="translate(100 100)"
                >
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        additive="sum"
                        begin="0s"
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                        values="1 1; 1.05 0.95; 1 1"
                        keyTimes="0; 0.5; 1"
                        transform="translate(100 100)"
                    />
                </path>
            </svg>
        </div>
    );
};

export default SquishyIcon;
