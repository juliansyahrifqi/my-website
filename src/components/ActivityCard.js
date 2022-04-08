import React from 'react';

function ActivityCard({ activity }) {
    return (
      <div
        className={`cursor-pointer p-[10px] outline outline-4 ${activity.outlineColor} rounded-lg duration-300 hover:scale-[1.04]`}
      >
        <div
          className={`py-4 px-6 rounded-lg ${activity.backgroundColor} h-full w-full duration-200`}
        >
          <h1 className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-2xl">
            {/* <span className="pr-2 text-white" role="img" aria-label="wave">
              {activity.icon}
            </span> */}
            {activity.title}
          </h1>
          <p className="text-white font-normal mt-4">
            {activity.description}
          </p>
        </div>
      </div>
    );
}

export default ActivityCard;