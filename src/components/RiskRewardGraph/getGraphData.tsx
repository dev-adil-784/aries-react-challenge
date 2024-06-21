import { StockOption } from '../../types'

const getGraphData = (options: StockOption[]): any => {
    const data = []
    for (let i = 50; i <= 150; i++) {
        const underlyingPrice = i
        let profitLoss = 0

        options.forEach(
            ({ strikePrice, type, bid, ask, longShort }: StockOption) => {
                const convertedType = type.toLowerCase()
                const isLong = longShort.toLowerCase() === 'long'

                if (convertedType === 'call') {
                    if (isLong) {
                        profitLoss += Math.max(
                            underlyingPrice - strikePrice - bid,
                            -bid
                        ) // Long call profit
                    } else {
                        profitLoss += Math.min(
                            strikePrice - underlyingPrice - ask,
                            ask
                        ) // Short call profit
                    }
                } else if (convertedType === 'put') {
                    if (isLong) {
                        profitLoss += Math.max(
                            strikePrice - underlyingPrice - bid,
                            -bid
                        ) // Long put profit
                    } else {
                        profitLoss += Math.min(
                            underlyingPrice - strikePrice - ask,
                            ask
                        ) // Short put profit
                    }
                }
            }
        )
        data.push({ underlyingPrice, profitLoss })
    }
    return data
}

export { getGraphData }
