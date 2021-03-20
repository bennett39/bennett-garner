import React from "react"
import {Helmet} from "react-helmet";
import "./layout.css"

export default function Layout({ children }) {
  return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Playfair+Display" />
                <title>Default Title</title>
            </Helmet>
            <div className="container">{children}</div>
        </>
    )
}

