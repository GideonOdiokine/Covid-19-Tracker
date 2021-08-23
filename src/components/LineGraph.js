import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        }
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,

    }
}

const LineGraph = () => {
    const [data, setData] = useState({});

    const buildChartData = (data, casesType = "cases") => {
        const chartData = [];
        let lastDataPoint;

        for (date in data.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDatePoint,
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        };
        return chartData;
    };

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const chartData = buildChartData(data);
                setData(chartData);
            });
    });

    return (
        <div>
            <Line options={options} data={{ dataset: { data, } }} />
        </div>
    );
};

export default LineGraph;
