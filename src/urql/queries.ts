export const tokenTradeQuery = `
    query {
        tokenTrade {
            id
            block
            er20Amount
            ethAmount
            timestamp
            tradeType
            address
        }
    }
`;

export const addressProfileQuery = `
    query {
        addressProfile {
            id
            address
            erc20Purchased
            erc20Sold
            weiSpent
            weiSold
            weiNetRealized
            noTrades
        }
    }
`;

export const latestTokenStateQuery = `
    query {
        latestTokenState(id: "latest") {
            id
            lastTimestamp
            lastBlock
            price
            weiSpent
            weiWithdrawn
            noAddress
            noTrades
        }
    }
`;
