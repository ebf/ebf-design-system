import React from "react"
import { Link } from "gatsby"

import withLayout from "../with-layout"

const SecondPage = () => (
  <>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default withLayout(SecondPage)
