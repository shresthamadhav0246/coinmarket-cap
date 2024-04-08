// components/Graph.js
import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const Graph = ({ data }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (!chartRef.current) return

        const ctx = chartRef.current.getContext("2d")
        const myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: "Price",
                        data: data.values,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                ],
            },
        })

        return () => {
            myChart.destroy()
        }
    }, [data])

    return (
        <div>
            <canvas className="max-w-full" ref={chartRef}></canvas>
        </div>
    )
}

export default Graph
