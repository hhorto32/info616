

fetch('data.json')
  .then(response => response.json())
  .then(json => {
    new Chart(document.getElementById('myChart1'), {
      type: 'bar',
      data: {
        labels: json.people,
        datasets: [{
          label: "Number of Top #1 Hits",
          data: json.values,
          backgroundColor: ["rgba(54, 162, 235, 0.6)", 
          "rgba(54, 235, 78, 0.6)"]
        }]
      }
    });
    new Chart(document.getElementById('myChart2'), {
      type: 'bar',
      data: {
        labels: json.people,
        datasets: [{
          label: "Number of Top #1 Hits",
          data: json.values,
          backgroundColor: [ 
            'rgba(255, 99, 229, 0.2)',
      'rgba(245, 255, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(108, 192, 75, 0.23)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(219, 102, 255, 0.29)',
      'rgba(201, 203, 207, 0.2)'],
          borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 4
        }]
      }
    });
  
    new Chart(document.getElementById('myChart3'), {
      type: 'polarArea',
      data: {
        labels: json.people,
        datasets: [{
          label: "Most Lines Spoken in Friends",
          data: json.values,
          backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
          hoverOffset: 1
        }]
      }
    });
    new Chart(document.getElementById('myChart4'), {
      type: 'doughnut',
      data: {
        labels: json.friends,
        datasets: [{
         label: "Lines",
          data: json.lines,
          backgroundColor: [
            '#3e8ad7ff', '#dcae7fff', '#3b4fc1ff',
            '#bd5533ff', '#3bc1a4ff', '#e2a41eff',
          ],
          hoverOffset: 8
        }]
      }
    });

  })
.catch(err => console.error('Failed to load data:', err));