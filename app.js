import { customerFreq, cool } from './munge-utils.js'; 

const frequencyCountMap = customerFreq();
const coolCountMap = cool();


const frequencyLabels = Object.keys(frequencyCountMap);
const coolLabels = Object.keys(coolCountMap);

const frequencyData = {
    labels: frequencyLabels,
    datasets: [{
        label: 'Purchase Frequency',
        backgroundColor: 'black',
        borderColor: 'rbg(255, 99, 132)',
        data: Object.values(frequencyCountMap)
    }]
};

const frequencyConfig = {
    type: 'bar',
    data: frequencyData,
    options: {}
};


//eslint-disable-next-line
const myFrequencyChart = new Chart(
    document.getElementById('myFrequencyChart'),
    frequencyConfig
);


const coolData = {
    labels: coolLabels,
    datasets: [{
        label: 'Purchase Frequency',
        backgroundColor: 'black',
        borderColor: 'rbg(255, 99, 132)',
        data: Object.values(coolCountMap)
    }]
};

const coolConfig = {
    type: 'line',
    data: coolData,
    options: {}
};


//eslint-disable-next-line
const myCoolChart = new Chart(
    document.getElementById('myCoolChart'),
    coolConfig
);


//TODO Line chart for cool factor, pie chart showing gender
