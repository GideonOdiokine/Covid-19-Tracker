import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const LineGraph = () => {
    const [data, setData] = useState({});


    return (
        <div>
            <Line data />
        </div>
    )
}

export default LineGraph
