import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
export default function Header() {
  return (
         <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">

      <img src="./logo.png" alt="" width="60" height="40"/>
   
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/customer">Add New Customer</Link></li>
            <li><Link class="dropdown-item" to="/cutomers">All Customer</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Employee
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="employee">Add New Employee</Link></li>
            <li><Link class="dropdown-item" to="employees">All Employee</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Associate
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="associate">Add Associatiate</Link></li>
            <li><Link class="dropdown-item" to="associates">All Associatiates</Link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Payout
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="custpayout">Manage Cutomer Payout</Link></li>
            <li><Link class="dropdown-item" to="emppayout">Manage Employee Payout</Link></li>
            <li><Link class="dropdown-item" to="asspayout">Manage Associative Payout</Link></li>
          </ul>
        </li>
      </ul>
      
      <ul class="navbar-nav d-flex logmenu">
          <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/profile">MY Profile</Link></li>
            <li><Link class="dropdown-item" to="/logs">Logs</Link></li>
            <li><Link class="dropdown-item" to="/logout">Log Out</Link></li>
          </ul>
        </li>
        </ul>
        

        
    </div>
  </div>
</nav>
  )
}
