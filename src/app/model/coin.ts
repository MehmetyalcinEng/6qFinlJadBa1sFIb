export class Coin {
    time: Time;
    disclaimer: string;
    chartName: string;
    bpi: Bpi;
}

export class Bpi {
    USD: Eur;
    GBP: Eur;
    EUR: Eur;
}

export class Eur {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export class Time {
    updated: string;
    updatedISO: Date;
    updateduk: string;
}
