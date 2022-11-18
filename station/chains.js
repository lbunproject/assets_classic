module.exports = {
    mainnet: {
        'phoenix-1': {
            chainID: 'phoenix-1',
            lcd: 'https://phoenix-lcd.terra.dev',
            gasAdjustment: 1.75,
            gasPrices: { uluna: 0.015 },
            prefix: 'terra',
            name: 'Terra',
            icon: 'https://assets.terra.money/icon/svg/Terra.svg',
        },
        'osmosis-1': {
            chainID: 'osmosis-1',
            lcd: 'https://lcd.osmosis.zone',
            gasAdjustment: 1.75,
            gasPrices: { uosmo: 0.025 },
            prefix: 'osmo',
            name: 'Osmosis',
            icon: 'https://assets.terra.money/icon/svg/ibc/OSMO.svg',
        },
    },
    testnet: {
        'pisco-1': {
            chainID: 'pisco-1',
            lcd: 'https://pisco-lcd.terra.dev',
            gasAdjustment: 1.75,
            gasPrices: { uluna: 0.015 },
            prefix: 'terra',
            name: 'Terra',
            icon: 'https://assets.terra.money/icon/svg/Terra.svg',
        }
    }
}