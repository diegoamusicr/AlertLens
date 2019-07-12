
//line
var ctxL = document.getElementById("lineChart_video").getContext('2d');

var myLineChart = new Chart(ctxL, {
type: 'line',

data: {
    
    labels: ["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],
    datasets: [{
        label: "Cantidad de movimiento",
        data: [10, 4, 0, 0, 0, 15, 27, 76, 85, 40, 10, 12, 46, 67, 87, 59, 20, 51, 36, 15, 0, 8, 6, 7],
        backgroundColor: [
        'rgba(241, 28, 28, 0.85)',
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



}

);

