const chartElement = document.getElementById('myChart');
// const labels = Utils.months({ count: 7 });
new Chart(chartElement, {
    type: 'bar',
    data: {
        labels: ["65"," 59", "80", "81", "56", "55", "40"],
        datasets: [{
            label: '數量',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)',
                'rgb(145, 189, 217)'
            ],
            borderColor: [
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});