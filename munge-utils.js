import { defaultData } from './data.js';

defaultData = countMap;
const countMap = {};

for (let customer of customers) {
    const frequency = customer.purchase_frequency;

    if (countMap[frequency]) {
        countMap[frequency]++;
    } else {
        countMap[frequency] = 1;
    }
}

return countMap;
}
