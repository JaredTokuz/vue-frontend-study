export const tokenTradeQuery = `
    query {
        tokenTrade {
            id
            nonce
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
        latestTokenState {
            id
            last_timestamp
            last_nonce
            price
            weiSpent
            weiWithdrawn
            noAddress
            noTrades
        }
    }
`;
