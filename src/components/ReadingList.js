import React from 'react';

function ReadingList({ list }) {
    return (
      <div className="reading-list-item mt-8 cursor-pointer">
        <div className="w-full bg-gray-800  hover:bg-slate-800 duration-300 hover:outline outline-slate-700 rounded-md p-4">
          <div className="md:flex justify-between">
            <div className="reading-title text-white">{list.title}</div>

            <div className="reading-author mt-2 text-white md:mt-0">
              {list.author}
            </div>
          </div>

          <div className="w-full bg-gray-500 rounded-sm mt-4">
            <div
              className="bg-[#070F1E] text-xs font-medium text-gray-400 text-center p-0.5 leading-none rounded-sm"
              style={{
                width: `${(list.currentPages / list.totalPages) * 100}%`,
              }}
            >
              {" "}
              {list.currentPages} of {list.totalPages} pages
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReadingList;