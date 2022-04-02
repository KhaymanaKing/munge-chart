import { customerFreq } from './munge-utils.js'; 

const countMap = customerFreq();

console.log(countMap);

const labels = Object.keys(countMap);


const data = {
    labels: labels,
    datasets: [{
        label: 'Purchase Frequency',
        backgroundColor: 'black',
        borderColor: 'rbg(255, 99, 132)',
        data: Object.values(countMap)
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

//eslint-disable-next-line
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
