var ctx = document.getElementById("resultGraph").getContext("2d");
var color = getColor();

var createDates = function() {
    var dates = [];
    var date = new Date();
    var daysOfWeek = [];
    var dateRange = "";
    var result = document.getElementById("currentWeek");

    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";

    for (var i = 0; i < 7; i++) {
        var tempDate = new Date();
        tempDate.setDate(date.getDate() - date.getDay() + i);
        if (i == 0) {
            dateRange = dateRange + (tempDate.getMonth() + 1) + "/" + tempDate.getDate();
            dateRange = dateRange + " - ";
        }
        if (i == 6) {
            dateRange = dateRange + (tempDate.getMonth() + 1) + "/" + tempDate.getDate();
            result.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dateRange;
        }
        var str = daysOfWeek[i] + " - " + (tempDate.getMonth() + 1) + "/" + tempDate.getDate();
        dates.push(str);  
    }

    return dates;
};

var createChart = function(scores) {
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: createDates(),
        datasets: [{
            label: 'High Score',
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            hoverBackgroundColor: color,
            hoverBorderColor: color,
            data: scores
        }]
    },
    options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
};

