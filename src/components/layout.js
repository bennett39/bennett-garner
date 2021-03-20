import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Playfair+Display" />
            <div className="container">{children}</div>
        </div>
    )
}

