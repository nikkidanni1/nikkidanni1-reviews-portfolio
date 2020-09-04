import React from 'react'
import Navigation from 'components/Navigation'

const Layout = ({ child }) => {
    return (
        <>
            <Navigation />
            <div className='main'>
                {child}
            </div>
        </>
    )
}

export default Layout