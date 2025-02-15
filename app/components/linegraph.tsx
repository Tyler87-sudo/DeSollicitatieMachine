"use client"

import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineGraph({variable = [0,0,0], string} : {variable?: number[]; string?: string[]}, ) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: "Tip Efficientie",
            },
        },
    };

    const data = {
        labels: string,
        datasets: [
            {
                label: "Datapunten",
                data: variable, // Your Y-axis values
                borderColor: "rgba(75,192,192,1)", // Line color
                backgroundColor: "rgba(75,192,192,0.2)", // Fill color
            },
        ],
    };

    return <Line options={options} data={data} />;
}