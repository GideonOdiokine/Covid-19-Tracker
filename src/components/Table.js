import React from 'react'
import { createStructuredSelector } from 'reselect'

export const Table = ({ countries }) => {
    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <tr>
                    <td>{country}</td>
                    <td>{cases}</td>
                </tr>
            ))}
        </div>
    )
}
