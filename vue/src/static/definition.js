const years = [];
const months = [];
const dates = [];

        for(let y = 1967; y < 2000; y++) {
                const set_data = new Date(y, 0, 0);
                const opt = {year:'numeric'};
                const wareki = set_data.toLocaleDateString("ja-JP-u-ca-japanese", opt);
                years.push(`${y}年　（${wareki}）`)
        }

        for(let m = 1; m < 13; m++) {
                months.push(m);
        }


        for(let d = 1; d < 32; d++) {
                dates.push(d);
        }

export default { years, months, dates};