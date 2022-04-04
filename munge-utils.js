import { customers } from './data.js';




export function customerFreq(){

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
//TODO cool factor count & gender count

export function cool(){

    const countMap = {}; 

    for (let customer of customers) {
        const coolFactor = customer.cool_factor;

        if (countMap[coolFactor]) {
            countMap[coolFactor]++;
        } else {
            countMap[coolFactor] = 1;
        }
    }
    return countMap;
}