import { describe, it, expect } from 'vitest'
import { Currzy } from '../../src'

describe('CBRF Provider', () => {
    it('fetches rates, checks individual rates and performs conversions', async () => {
        const api = new Currzy('cbrf');

        // ===== All rates relative to USD =====
        console.log("\n===== All rates relative to USD =====");
        const ratesToUSD = await api.getAllRatesTo('USD');
        console.table(ratesToUSD);

        // ===== All rates relative to RUB =====
        console.log("\n===== All rates relative to RUB =====");
        const ratesToRUB = await api.getAllRatesTo("RUB");
        console.table(ratesToRUB);

        // ===== Check individual rates =====
        console.log("===== Check individual rates =====");
        const testCurrencies = ["USD", "EUR", "RUB", "AMD", "GBP", "JPY"];

        for (const code of testCurrencies) {
            const rate = await api.getRate(code);
            console.log(`${code} ->`, rate.toFixed(4));
            expect(rate).toBeTypeOf('number');
        }

        // ===== Conversion tests =====
        console.log('\n===== Conversion tests =====');
        const conversionTests: [number, string, string][] = [
            [100, 'USD', 'RUB'],
            [1000, 'RUB', 'USD'],
            [50, 'EUR', 'USD'],
            [1, 'RUB', 'AMD'],
            [123, 'GBP', 'JPY'],
            [100, 'USD', 'EUR'],
            [1, 'AMD', 'RUB'],
            [8000, 'RUB', 'USD'],
            [1, 'RUB', 'JPY']
        ];

        for (const [amount, from, to] of conversionTests) {
            const converted = await api.convert(amount, from, to);
            const back = await api.convert(converted, to, from);

            console.log(
                `${amount} ${from} -> ${to} = ${converted.toFixed(4)} | reverse conversion: ${back.toFixed(4)}`
            );

            expect(converted).toBeTypeOf('number');
            expect(back).toBeTypeOf('number');
        }
    });
});
