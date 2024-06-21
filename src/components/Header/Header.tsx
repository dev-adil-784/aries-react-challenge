import React from 'react'

const Header = ({ name }: { name: string }): JSX.Element => {
    return (
        <div className="xl:px-32">
            <h1 className="text-5xl">{name}</h1>
        </div>
    )
}

export { Header }
