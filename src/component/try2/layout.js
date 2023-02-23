import React from "react"

import { ColorProvider } from "./color-mode"
import  Header  from "./header"
import  Footer  from "./footer"

const Layout = ({ children }) => {
  return <ColorProvider>
    <Header />
    { children }
    <Footer />
  </ColorProvider>
}

export default Layout;