import { customerFreq, cool, genderCount } from './munge-utils.js'; 

const frequencyCountMap = customerFreq();
const coolCountMap = cool();
const genderCountMap = genderCount();

const frequencyLabels = Object.keys(frequencyCountMap);
const coolLabels = Object.keys(coolCountMap);
const genderCountLabels = Object.keys(genderCountMap);

const frequencyData = {
    labels: frequencyLabels,
    datasets: [{
        label: 'Purchase Frequency',
        backgroundColor: ['black', 
            'red', 
            'blue', 
            'green', 
            'purple', 
            'orange',
            'yellow',
            'cyan'],
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
        label: 'Cool Factor',
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
const genderChart = new Chart(
    document.getElementById('genderCountChart'),
    coolConfig
);

const genderData = {
    labels: genderCountLabels,
    datasets: [{
        label: 'Gender Count',
        backgroundColor: 
        ['black', 
            'red', 
            'blue', 
            'green', 
            'purple', 
            'orange',
            'yellow',
            'cyan'],
        borderColor: 'rbg(255, 99, 132)',
        data: Object.values(genderCountMap)
    }]
};

const genderConfig = {
    type: 'pie',
    data: genderData,
    options: {}
};


//eslint-disable-next-line
const myCoolChart = new Chart(
    document.getElementById('myCoolChart'),
    genderConfig
);

//TODO Line chart for cool factor, pie chart showing gender
