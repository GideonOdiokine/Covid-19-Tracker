import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    });

    const buildChartData = data => {
        const chartData = [];
        let lastDataPoint;

        data.cases.forEach(date => {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data['cases'][date] - lastDatePoint
                }
                chartData.push(newDataPoint)
            }
            lastDataPoint = data['cases'][date]
        })
        return chartData;
    }
    return (
        <div>
            <Line data />
        </div>
    );
};

export default LineGraph;
