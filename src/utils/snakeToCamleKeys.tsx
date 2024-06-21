import { StockOption, StockOptionRawData } from '../types'

const snakeToCamelKeys = (
    obj: StockOptionRawData | null
): StockOption | null => {
    if (obj !== null && typeof obj === 'object') {
        const newObj: Partial<StockOption> = {}

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const camelCaseKey = key.replace(/([-_]\w)/g, (match) =>
                    match.toUpperCase().replace('-', '').replace('_', '')
                )
                const value = obj[key as keyof StockOptionRawData]
                if (value !== undefined) {
                    newObj[camelCaseKey as keyof Partial<StockOption>] =
                        value as any
                }
            }
        }

        return newObj as StockOption // Type assertion to StockOption
    } else {
        return null
    }
}

export { snakeToCamelKeys }
