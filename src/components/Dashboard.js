import React from 'react'

function Dashboard({children}) {
  return (
    <div className="dashboard">
        <h1>Hotel management system</h1>
        {children}
    </div>
  )
}

export default Dashboard