import React from 'react'


export const Table = ({ countries }) => {
    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <tr key={cases}>
                    <td>{country}</td>
                    <td>{cases}</td>
                </tr>
            ))}
        </div>
    )
}
