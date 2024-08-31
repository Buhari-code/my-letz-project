import React from 'react'
import Home from '../Home/Home'
import Service from '../Service/Service'
import Homepage from '../Homepage/Homepage'
import Signin from '../Signin/Signin'
import Login from '../Login/Login'
import Package from '../Packages/Package'
import PackageSearch from '../PackageSearch/PackageSearch'
import Visa from '../Visa/Visa'


function Landing() {
  return (
    <div>
      <Homepage />
      <Service />
      <PackageSearch />
      <Package />
      <Visa />
    </div>
  )
}

export default Landing
