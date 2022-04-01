// import functions and grab DOM elements
import defaultExport from './data.js';
// let state
const countMap = defaultExport;
// set event listeners 
  // get user input
console.log(countMap);
  // use user input to update state 
  // update DOM to reflect the new state
const labels = Object.keys(countMap);


const data = {
    labels: labels,
    datasets: [
        {
            label: 'Purchase Frequency',
            backgroundColor: 'black',
            borderColor: 'rbg(255, 99, 132)',
            data: Object.values(countMap)
        },
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);