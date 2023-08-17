import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-blue-500 hover:underline">Logo</a>
        <a href="#" className="text-gray-600 hover:underline">Login</a>
        <a href="#" className="text-gray-600 hover:underline">Registro</a>
      </div>
      {/* <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Mais Relevantes</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Mais Recentes</button>
      </div> */}
    </header>
  );
};

export default Header;
