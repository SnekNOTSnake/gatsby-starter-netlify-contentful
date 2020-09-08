import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }) => {
	return (
		<div>
			<div style={{ maxWidth: 800, margin: '0 auto' }}>
				<Navigation />
				{children}
			</div>
		</div>
	)
}

export default Layout
