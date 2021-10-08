import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
        .then
});
return (
    <div>
        <Line data />
    </div>
);
};

export default LineGraph;
