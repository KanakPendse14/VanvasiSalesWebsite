import React from 'react'
import NavBar from '../../components/NavBar'
import UserMenu from '../../components/UserMenu'
import Footer from '../../components/Footer'

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Your profile</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
