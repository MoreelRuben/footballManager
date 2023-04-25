window.addEventListener("DOMContentLoaded", init)



function init(){
// Get the canvas element and create a new Chart instance
const financeChart = document.getElementById('financeChart').getContext('2d');
const chart = new Chart(financeChart, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021'],
    datasets: [{
      label: 'Total Balance',
      data: [500000, 750000, 1000000],
      fill: false,
      borderColor: '#3e95cd',
      borderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total Balance (Past 3 Years)'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
}
