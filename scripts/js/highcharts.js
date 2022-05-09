document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('highchart', {
    chart: {
        type: 'packedbubble',
        height: '35%',
        backgroundColor: 'rgba(0, 0, 0, 0.075)',
    },
    title: {
        text: "Tools I've Worked With",
        style: {
            color: 'white'
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false,
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b style="color:black">{point.name}:</b> {point.value}/10 experience'
    },
    exporting: {
        enabled: false,
    },
    plotOptions: {
        packedbubble: {
            minSize: '10%',
            maxSize: '100%',
            zMin: 0,
            zMax: 10,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: false,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 3
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Front-end',
        data: frontEndData
    }, {
        name: 'Back-end',
        data: backEndData
    }, {
        name: 'Databases',
        data: databaseData
    }, {
        name: 'MISC.',
        data: toolsData
    }]
  });
});

const frontEndData = [{
    name: 'React',
    value: 7
},
{
    name: "Angular",
    value: 8
},
{
    name: "Bootstrap",
    value: 7
},
{
    name: "JavaScript",
    value: 8
},
{
    name: "HTML",
    value: 6
},
{
    name: "CSS / SCSS",
    value: 4
}];

const backEndData = [{
    name: "C# .Net",
    value: 7
},
{
    name: "Java",
    value: 8
},
{
    name: "Python",
    value: 6
},
{
    name: "Ruby",
    value: 5
},
{
    name: "OCaml",
    value: 3
},
{
    name: "SQL",
    value: 6
},
{
    name: "EF Core",
    value: 6
},
{
    name: "LINQ",
    value: 6
}];

const databaseData = [{
    name: "PostgreSQL",
    value: 7
},
{
    name: "MongoDB",
    value: 5
}];

const toolsData = [{
    name: "Git",
    value: 7
},
{
    name: "Unix",
    value: 8
},
{
    name: "Docker",
    value: 6
},
{
    name: "VSCode",
    value: 9
},
{
    name: "Vim",
    value: 3
},
{
    name: "ElasticSearch",
    value: 4
},
{
    name: "Kibana",
    value: 4
}];