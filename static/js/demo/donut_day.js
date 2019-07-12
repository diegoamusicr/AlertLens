
//doughnut
var ctxD = document.getElementById("donut_day").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {
    labels: ["Peligro", "Alerta", "Notificacion", "Notificacion Personalizada"],
    datasets: [{
    data: [1, 3, 25, 14],
    backgroundColor: ["#F7464A", "#fce642", "#36c6e3", "#88ff38"],
    hoverBackgroundColor: ["#FF5A5E", "#FFC870", "#5AD3D1", "#A8B3C5"]
    }]
},
options: {
    responsive: true
}
});

