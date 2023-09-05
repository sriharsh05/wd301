const Header = () => {
    return (
      <nav className="bg-gray-800 py-4">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center w-1/3">
             <a href="/" className="ml-6 text-gray-300 hover:text-white"> {/*  Not /home */}
                Home
              </a>
              <a href="/tasks" className="ml-6 text-gray-300 hover:text-white">
                Tasks
              </a>
            </div>
            <div className="flex items-center w-1/3 justify-center">
              <h2 className="text-white text-lg font-bold">Smarter Tasks</h2>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Header;
