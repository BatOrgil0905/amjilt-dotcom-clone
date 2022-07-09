import React from 'react';

const Menu = () => {
    return (
      <>
        <ul className="flex flex-col lg:flex-row text-right lg:text-center text-white text-sm">
          <li className="font-bold px-1 lg:px-4 py-1 lg:py-2 cursor-pointer underline">
            МОНГОЛ ХЭЛ
          </li>
          <li className="font-bold px-1 lg:px-4 py-1 lg:py-2 cursor-pointer duration-300 hover:text-sky-500 lg:hover:border-white lg:hover:rounded-full lg:hover:bg-white lg:hover:text-sky-400">
            BAGSH.MN
          </li>
          <li className="font-bold px-1 lg:px-4 py-1 lg:py-2 cursor-pointer duration-300 hover:text-sky-500 lg:hover:border-white lg:hover:rounded-full lg:hover:bg-white lg:hover:text-sky-400">
            ODOSURY
          </li>
          <li className="font-bold px-1 lg:px-4 py-1 lg:py-2 cursor-pointer duration-300 hover:text-sky-500 lg:hover:border-white lg:hover:rounded-full lg:hover:bg-white lg:hover:text-sky-400">
            TATATONGA
          </li>
          <li className="font-bold px-1 lg:px-4 py-1 lg:py-2 cursor-pointer duration-300 hover:text-sky-500 lg:hover:border-white lg:hover:rounded-full lg:hover:bg-white lg:hover:text-sky-400">
            ZUUZUU'S FRIENDS
          </li>

          <button class="flex text-sm justify-end lg:justify-center text-white font-bold mx-1 lg:mx-4 lg:border lg:border-white lg:rounded-full lg:px-4 lg:py-2 duration-300 hover:text-sky-500 lg:hover:bg-white lg:hover:text-sky-400">
            LOGIN
          </button>
        </ul>
      </>
    );
}

export default Menu;