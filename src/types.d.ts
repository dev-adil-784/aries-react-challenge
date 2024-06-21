export interface StockOptionRawData {
    strike_price: number
    type: string
    bid: number
    ask: number
    long_short: string
    expiration_date: string
}

export interface StockOption {
    strikePrice: number
    type: string
    bid: number
    ask: number
    longShort: string
    expirationDate: string
}
