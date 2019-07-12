
//line
var ctxL = document.getElementById("lineChart_month").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
    
    labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"],
    datasets: [{
        label: "Cantidad de movimiento",
        data: [10, 4, 0, 0, 0, 15, 27, 76, 85, 40, 10, 12, 46, 67, 87, 59, 20, 51, 36, 15, 0, 8, 6, 45, 20, 51, 36, 15 ],
        backgroundColor: [
        'rgba(105, 0, 132, .2)',
        ],
        borderColor: [
        'rgba(200, 99, 132, .7)',
        ],
        borderWidth: 0
    }
    ]
},
options: {
    responsive: true
}
});

