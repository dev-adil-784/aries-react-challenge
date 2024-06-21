import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    ResponsiveContainer,
} from 'recharts'
import { StockOption } from '../../types'
import { getOptionAnalysis } from './getOptionAnalysis'
import { getGraphData } from './getGraphData'

const RiskRewardGraph = ({
    options,
}: {
    options: StockOption[]
}): JSX.Element => {
    const { maxProfit, maxLoss, breakEvenPoints } = getOptionAnalysis(options)
    const graphData = getGraphData(options)

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="underlyingPrice">
                        <Label
                            value="Price"
                            position="insideBottom"
                            offset={-10}
                        />
                    </XAxis>
                    <YAxis dataKey="profitLoss">
                        <Label
                            value="Profit Loss"
                            position="center"
                            angle={-90}
                            offset={-10}
                        />
                    </YAxis>
                    <Line
                        type="monotone"
                        dataKey="profitLoss"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
            <div className="container p-4 shadow-md rounded-lg">
                <ul>
                    <li>
                        <h3 className="text-lg font-semibold">
                            Max Profit: {maxProfit}
                        </h3>
                    </li>
                    <li>
                        <h3 className="text-lg font-semibold">
                            Max Loss: {maxLoss}
                        </h3>
                    </li>
                    <li>
                        <h3 className="text-lg font-semibold">
                            Break-even Points: {breakEvenPoints.join(', ')}
                        </h3>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { RiskRewardGraph }
