import React from 'react';
import { connect } from 'react-redux'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import Resume from './components/Resume/Resume';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ theme }) {
  return (
    <div className={`sm:flex-none md:flex lg:flex xl:flex`} style={{ background: theme ? '#ced4db' : '#18191a' }}>

      <LeftSidebar />

      <Resume />

      <RightSidebar />

      <ToastContainer />
    </div>

  );
}
const mapStateToProps = ({ switchResume }) => ({
  theme: switchResume.theme
})
export default connect(mapStateToProps)(App)
