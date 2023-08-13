import React, {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import AdminMenu from '../../components/AdminMenu';

const CreateCategory = () => {
  
  return (
   <>
   <NavBar />
   <div className="container-fluid m-3 p-3">
   <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
    </div>
    </div>
   <Footer />
   
        
    </>
    
  );
};

export default CreateCategory

