import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="creator">
          Created by <span className="creator-name">Tomáš Kůrka</span> 2021
        </div>
        <div className="rights">
          All rights reserved. AP materials may not be republished, broadcast, rewritten or
          redistributed.
        </div>
      </div>
    </div>
  )
}

export default Footer
