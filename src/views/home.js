import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Operations Officer</title>
        <meta property="og:title" content="Regional Operations Officer" />
      </Helmet>
    </div>
  )
}

export default Home
