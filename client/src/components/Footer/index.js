import React from 'react'

export default function Footer() {
    const footer = "Footer"
    return (
        <div style={{
            position: "relative",
            left: 0,
            bottom: 0,
            right: 0
        }}>
            <ul className="flex-row">
                <li className="mx-1">
                    <span className="text-dark">&copy; 2022 Table-Top Game Finder; Tyler Davis, Cindy Dunham, William Brooks, Karen Richardson</span>
                </li>
            </ul>
        </div>
    )
}