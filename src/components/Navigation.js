import React from 'react'
import { Link } from 'gatsby'

const Layout = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</nav>
	)
}

export default Layout
