import React from 'react'

import Spinner from 'components/Spinner'

const Layout = ({ children, loading }) => {
	return (
		<>
			{loading && <Spinner />}

			<div className='main' style={{ filter: loading ? 'blur(2px)' : '' }}>
				{children}
			</div>
		</>
	)
}

export default Layout
