import React from 'react'
import { Header, RiskRewardGraph } from '../../components'
import { StockOption, StockOptionRawData } from '../../types'
import { snakeToCamelKeys } from '../../utils/snakeToCamleKeys'

const options: StockOptionRawData[] = [
    {
        strike_price: 100,
        type: 'Call',
        bid: 10.05,
        ask: 12.04,
        long_short: 'long',
        expiration_date: '2025-12-17T00:00:00Z',
    },
    {
        strike_price: 102.5,
        type: 'Call',
        bid: 12.1,
        ask: 14,
        long_short: 'long',
        expiration_date: '2025-12-17T00:00:00Z',
    },
    {
        strike_price: 103,
        type: 'Put',
        bid: 14,
        ask: 15.5,
        long_short: 'short',
        expiration_date: '2025-12-17T00:00:00Z',
    },
    {
        strike_price: 105,
        type: 'Put',
        bid: 16,
        ask: 18,
        long_short: 'long',
        expiration_date: '2025-12-17T00:00:00Z',
    },
]

const transformedOptions = options.map(snakeToCamelKeys) as StockOption[]

const Dashboard = (): JSX.Element => {
    return (
        <div
            className={
                'h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr overflow-y-auto gap-6 p-10 bg-gray-900 text-gray-300'
            }
        >
            <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
                <Header name="Options Risk & Reward Graph" />
            </div>
            <div className="md:col-span-2 row-span-4">
                <RiskRewardGraph options={transformedOptions} />
            </div>
        </div>
    )
}

export { Dashboard }
