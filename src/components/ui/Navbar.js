import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <div className='container-fluid'>
            <span className='navbar-brand'>
                Alex
            </span>
            <button className='btn btn-outline-danger'>
                <i className='fas fa-sign-out-alt'> </i>
                <span> Salir</span>
            </button>
        </div>
    </div>
  )
}
