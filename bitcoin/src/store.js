let initailstate={
    lineChartData: {
      labels: [],
      datasets: [
        {
          label: "BTC-USD",
          backgroundColor: "lightblue",
          borderColor: "blue",
          pointBackgroundColor: "black",
          pointBorderColor: "green",
          borderWidth: "2",
          data: [],
        },
      ],
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true,
      },
      title: {
        display: true,
        text: "BTC-USD",
        fontSize: 20
    },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
          {
            scaleLabel: {
              display: true,
              labelString: 'Time axis'
            }
          }
        ],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'USD equivalent of BTC'
          }
        }],
      },
    },
  };
  export default initailstate