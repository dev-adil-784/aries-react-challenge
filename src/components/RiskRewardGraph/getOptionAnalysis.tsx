import { StockOption } from '../../types'

const getOptionAnalysis = (options: StockOption[]): any => {
    let maxProfit = 0
    let maxLoss = 0
    const breakEvenPoints: number[] = []

    options.forEach(
        ({ strikePrice, type, bid, ask, longShort }: StockOption) => {
            const typeConverted = type.toLowerCase()
            const isLong = longShort.toLowerCase() === 'long'

            // premium here refers to the bid and premium received refers to the ask price.

            // To get the breakpoints
            let breakEvenPoint = 0

            if (typeConverted === 'call') {
                breakEvenPoint = isLong ? strikePrice + bid : strikePrice - ask // long call => strike + premium
            } else if (typeConverted === 'put') {
                breakEvenPoint = isLong ? strikePrice - bid : strikePrice + ask // long put => strike - premium
            }
            breakEvenPoints.push(breakEvenPoint)

            // Now to get the maxProfit and maxLoss
            let profitPotential = 0

            if (typeConverted === 'call') {
                if (isLong) {
                    profitPotential = Infinity // for long call this is unlimited
                } else {
                    profitPotential = -bid // for short call it is the premium paid
                }
            } else if (typeConverted === 'put') {
                if (isLong) {
                    profitPotential = -bid // for long put this is the premium paid
                } else {
                    profitPotential = Infinity // ultimate for short put
                }
            }

            if (profitPotential > maxProfit) {
                maxProfit = profitPotential
            }
            if (profitPotential < maxLoss) {
                maxLoss = profitPotential
            }
        }
    )

    return {
        maxProfit: maxProfit,
        maxLoss: maxLoss,
        breakEvenPoints: breakEvenPoints,
    }
}

export { getOptionAnalysis }
