// Chart Options

const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },

    series: [{
        name: 'Ksh',
        data: [8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928, 1300092, 1026908, 1626908, 1926908]

    }],

    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },

    plotOptions: {
        // changes the orientation of the bar graph
        bar: {
            horizontal: false
        }
    },

    fill: {
        // fills each bar with the allocated color
        colors: ['#FFA102']
    },

    dataLabels: {
        // remove the default value lables on the bars themselves
        enabled: false
    },

    title: {
        text: 'Virtual Pay: Annual Revenue By Month',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'

        }

    }
};

// Initialize the chart

const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render the chart

chart.render();

// Event Method to toggle Horizontla Bars
document.querySelector('#horizontal-button').addEventListener('click', () => chart.updateOptions({
    plotOptions: {
        // changes the orientation of the bar graph
        bar: {
            horizontal: true
        }
    }
}));

document.querySelector('#switch-orientation').addEventListener('click', () => chart.updateOptions({
    plotOptions: {
        // changes the orientation of the bar graph
        bar: {
            horizontal: false
        }
    }
}))