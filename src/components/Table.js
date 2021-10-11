import React from 'react';
import numeral from 'numeral';


export const Table = ({ countries }) => {
    return (
        <div className="table">
            <table >
                {countries.map(({ country, cases }) => (

                    <tbody key={country}>
                        <tr  >
                            <td>{country}</td>
                            <td>{numeral(cases).format("0,0")}</td>
                        </tr>
                    </tbody>

                ))
                }
            </table >
        </div>
    )
}
