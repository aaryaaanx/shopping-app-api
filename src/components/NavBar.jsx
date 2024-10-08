import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  
       <div>
      <div>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Shopping-App API</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Add Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view">View All Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   
  )
}

export default NavBar
