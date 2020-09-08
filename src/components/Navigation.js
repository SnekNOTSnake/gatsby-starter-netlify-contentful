import React from 'react'
import { Link } from 'gatsby'

const Layout = () => {
	return (
		<nav
			style={{
				width: '100%',
				display: 'flex',
				height: 64,
				alignItems: 'center',
				justifyContent: 'flex-end',
			}}
		>
			<Link style={{ marginLeft: 16 }} to="/">
				Home
			</Link>
			<Link style={{ marginLeft: 16 }} to="/about">
				About
			</Link>
		</nav>
	)
}

export default Layout
