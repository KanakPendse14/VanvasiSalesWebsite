import React from 'react'

const UserMenu = () => {
  return (
    <>
    <div className="list-group">
    <h4>Dashboard</h4>
  <a href="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</a>
  <a href="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</a>
</div>

</> 
)
  }

export default UserMenu
