import React from 'react'
import NavBar from '../../components/NavBar'
import AdminMenu from '../../components/AdminMenu'
import Footer from '../../components/Footer'

const CreateProduct = () => {
  return (
    <>
   <NavBar />
   <div className="container-fluid m-3 p-3">
   <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
          </div>
    </div>
    </div>
   <Footer />
   
        
    </>
  )
}

export default CreateProduct
