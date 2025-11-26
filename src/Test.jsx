import { useState } from 'react';

const Test = () => {
  const [dark, setDark] = useState(false);

  const onClickButton = (event) => {
    console.log(event.target.textContent);
  };

  const numbers = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* 다크 모드 토글 버튼 - 우측 상단 */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 shadow-lg transition-all"
          >
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Dark Mode Example
          </h1>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onClickButton}>
              Primary
            </button>
            <button className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-700" onClick={onClickButton}>
              Secondary
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={onClickButton}>
              Success
            </button>
          </div>

          <div className="max-w-sm mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Card Title</h2>
            <p className="text-gray-600 dark:text-gray-300">This is a simple card component with Tailwind CSS dark mode.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Action
            </button>
          </div>

          <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Site</h1>
              <nav className="flex gap-4">
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Home</a>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">About</a>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Contact</a>
              </nav>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {numbers.map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Card {i}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Responsive card example with dark mode.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;