Highcharts.chart('container', {
    chart: {
      type: 'variablepie'
    },
    title: {
      text: 'Eagle, Contruction Cost: (material + Labour)'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.y}% {point.name}'
    },
    series: [{
      minPointSize: 10,
      innerSize: '65%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Excavation',
        y: 57,
        z: 100
      }, {
        name: 'RCC Work',
        y: 12,
        z: 100
      }, {
        name: 'Masonry',
        y: 6,
        z: 100
      }, {
        name: 'Plaster',
        y: 7,
        z: 100
      }, {
        name: 'Flooring, Skirting, Dado & cladding, Counters Work',
        y: 5,
        z: 100
      }, {
        name: 'Wooden Works-Doors',
        y: 13,
        z: 100
      }, {
        name: 'Others',
        y: 3,
        z: 100
      }]
    }]
  });

//   $(".highcharts-title").remove();
  $(".highcharts-subtitle").remove();
  $(".highcharts-data-labels").remove();
  $(".highcharts-legend").remove();
  $(".highcharts-credits").remove();
  