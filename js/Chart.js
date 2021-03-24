Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Prestasi Profesionalitas'
    },
    xAxis: {
      categories: ['Jon Doe', 'Anastasia Doe', 'Park Jun Doe', 'Steven Doe', 'Justin Doe']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Value'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Komunikasi',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Manajemen',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Kerjasama',
      data: [3, 4, 4, 2, 5]
    }, {
        name: 'Improvisasi',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Produktifitas',
        data: [3, 4, 4, 2, 5]
      }]
  });