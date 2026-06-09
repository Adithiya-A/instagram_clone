import React from 'react'
import Sidebar from './components/Sidebar'
import Feeds from './components/Feeds'
import Suggestions from './components/Suggestions'

function App() {
  return (
    <div className="d-flex vh-100">
      <div className="w-20">
        <Sidebar/>
      </div>
      <div className="w-50 "><Feeds/></div>
      <div className="w-30 "><Suggestions/></div>
    </div>
  )
}

export default App