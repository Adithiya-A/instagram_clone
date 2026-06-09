import React from 'react'

function Sidebar() {
  return (
    <div className="m-3">
        <div className="d-flex flex-column gap-3">
            <img src="src/assets/instatext.png" className="w-50" alt="insta-text" />
            <div><i className="bi bi-house-door"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat-dots"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className="d-flex flex-column gap-3 bottom-0 position-fixed mb-3">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>

    </div>
  )
}

export default Sidebar