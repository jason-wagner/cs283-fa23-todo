function App() {
  return (
    <div className="min-h-[100vh] p-2.5 bg-slate-100">
      <div className="m-auto mt-[30px] p-8 bg-white rounded-md shadow-lg max-w-[512px] text-slade-900">
        <h2 className="text-2xl font-bold">Todo App</h2>
        <form action="#">
          <input
            type="text"
            className="w-full border-0 shadow p-3.5 text-lg mt-4"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="mt-8">
          <li className="flex mt-6 items-center justify-between">
            <div className="flex flex-1 items-center text-lg mr-6">
              <input type="checkbox" />
              <span className="ml-4">Finish CS 283 Homework</span>
              {/* <input type="text" className="ml-4 w-full border-0 shadow-mg p-2 text-lg" value="Finish React Series" /> */}
            </div>
            <button className="bg-white text-slate-400 hover:text-slate-700 border-0 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="flex mt-6 items-center justify-between">
            <div className="flex flex-1 items-center text-lg mr-6">
              <input type="checkbox" />
              <span className="ml-4 line-through">
                Go to Grocery
              </span>
              {/* <input type="text" className="ml-4 w-full border-0 shadow-mg p-2 text-lg" value="Go to Grocery" /> */}
            </div>
            <button className="bg-white text-slate-400 hover:text-slate-700 border-0 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="flex mt-6 items-center justify-between">
            <div className="flex flex-1 items-center text-lg mr-6">
              <input type="checkbox" />
              <span className="ml-4">Another  thing</span>
              {/* <input type="text" className="ml-4 w-full border-0 shadow-mg p-2 text-lg" value="Another thing" /> */}
            </div>
            <button className="bg-white text-slate-400 hover:text-slate-700 border-0 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>

        <div className="flex justify-between items-center text-slate-600 mt-5 pt-4 border-t border-t-slate-200">
          <div>
            <div className="text-slate-600 text-sm bg-white border border-gray-200 p-1.5"rounded-lg cursor-pointer >Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="flex justify-between items-center text-slate-600 mt-5 pt-4 border-t border-t-slate-200">
          <div>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">
              All
            </button>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">Active</button>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">Completed</button>
          </div>
          <div>
            <button className="text-slate-600 text-sm bg-white border border-gray-200 p-1.5 rounded-lg cursor-pointer">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
