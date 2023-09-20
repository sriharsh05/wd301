import React, { useState } from 'react';

const Dashboard: React.FC = () => {

  const [user] = useState(() => {
    const user = window.localStorage.getItem("userData");

    if (user) {
      return JSON.parse(user);
    }
    return null;
  });


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="flex text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div className="flex bg-gray-300 text-center rounded-lg mx-auto p-6">
        <p className="text-gray-800 px-4">Username: {user.name}</p>
        <p className="text-gray-800">Email : {user.email}</p>
      </div>
      <a
        
        id="logout-link"
        className="flex  justify-center rounded-md bg-slate-900 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        onClick={() => {
          window.localStorage.removeItem("userData");
        }}
        href="/signin"
      >
        Logout
      </a>
    </div>
  );
}

export default Dashboard;