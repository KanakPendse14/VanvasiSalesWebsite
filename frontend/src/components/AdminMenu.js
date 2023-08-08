import React from 'react'

const AdminMenu = () => {
  return (
    <>
    <div className="list-group">
    <h4>Admin</h4>
  <a href="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</a>
  <a href="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</a>
  <a href="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</a>
</div>

</> 
)
  }

export default AdminMenu
