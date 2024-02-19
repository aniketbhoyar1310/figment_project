import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Calender from './Calender';
import DashboardFooter from './DashboardFooter';

const Dashboard = () => {

  const renderCards = () => {
    return [...Array(4)].map((_, index) => (
      <div key={index} className='col-lg-3 col-md-12 col-sm-12 my-2'>
        <Card />
      </div>
    ));
  };

  return (
    <div className=''>
        <Navbar/>
        <div className='container-fluid  bg-sky-50 px-4'>
          <div className='row align-items-center'>
            <div className='col-lg-9 col-md-6 col-sm-12 '>
              <div className='row my-4'>
               {renderCards()}
              </div>
              <div className='row my-4'>
               {renderCards()}
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 '>
              <Calender/>
            </div>
          </div>
        </div>
        <DashboardFooter/>
    </div>
  )
}

export default Dashboard