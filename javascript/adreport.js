const chartMusic = document.getElementById('myMusic');
        new Chart(chartMusic, {
            type: 'bar',
            data: {
                labels: ["65", "59", "80", "81", "56", "55", "40"],
                datasets: [{
                    label: '數量',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgb(145, 189, 217)',
                    borderColor: 'rgb(255, 255, 255)',
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

        const chartSentence = document.getElementById('mySentence');
        new Chart(chartSentence, {
            type: 'bar',
            data: {
                labels: ["65", "59", "80", "81", "56", "55", "40"],
                datasets: [{
                    label: '數量',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgb(145, 189, 217)',
                    borderColor: 'rgb(255, 255, 255)',
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