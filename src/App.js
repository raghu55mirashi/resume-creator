import React from 'react';

import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import Resume from './components/Resume/Resume'

function App() {
  return (
    <div className="sm:flex-none md:flex lg:flex xl:flex bg-gray-300 py-2 w-screen">

      <LeftSidebar />

      <Resume />

      <RightSidebar />
    </div>

  );
}

export default App;
