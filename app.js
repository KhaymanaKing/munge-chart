


const countMap = defaultData;

console.log(countMap);

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