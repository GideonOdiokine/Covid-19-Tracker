import React from 'react'


export const Table = ({ countries }) => {
    return (
        <div className="table">
            <table >
                {countries.map(({ country, cases }) => (

                    <tbody key={country}>
                        <tr  >
                            <td>{country}</td>
                            <td>{cases}</td>
                        </tr>
                    </tbody>

                ))
                }
            </table >
        </div>
    )
}
