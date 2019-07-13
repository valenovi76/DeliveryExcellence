{"filter":false,"title":"scripts.js","tooltip":"/assets/js/scripts.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":94,"column":7},"action":"insert","lines":["      // Load Charts and the corechart package.","      google.charts.load('current', {'packages':['corechart']});","","      // Draw the pie chart for Michelle's pizza when Charts is loaded.","      google.charts.setOnLoadCallback(drawMichelleChart);","","      // Draw the pie chart for the Karen's pizza when Charts is loaded.","      google.charts.setOnLoadCallback(drawKarenChart);","      ","      // Draw the pie chart for the Vale's pizza when Charts is loaded.","      google.charts.setOnLoadCallback(drawValeChart);","","      // Callback that draws the pie chart for Michelle's pizza.","      function drawMichelleChart() {","","        // Create the data table for Michelle's pizza.","        var data = new google.visualization.DataTable();","        data.addColumn('string', 'Skills');","        data.addColumn('number', '%');","        data.addRows([","          ['Project Management', 5],","          ['Six ∑', 4],","          ['Insights', 2],","          ['Lean Pract.', 2],","          ['CI Coaching', 5],","          ['Data Analytics', 1]","        ]);","","        // Set options for Michelle's pie chart.","        var options = {legend:'left',","                       colors: ['#6300AA', '#B54DFF', '#9500FF', '#5A2680', '#7700CC'],","                       fontSize:11,","                       ","        };","","        // Instantiate and draw the chart for Michelle's pizza.","        var chart = new google.visualization.PieChart(document.getElementById('Michelle_chart_div'));","        chart.draw(data, options);","      }","","      // Callback that draws the pie chart for Karen's pizza.","      function drawKarenChart() {","","        // Create the data table for Karen's pizza.","        var data = new google.visualization.DataTable();","        data.addColumn('string', 'Skills');","        data.addColumn('number', '%');","        data.addRows([","          ['Project Management', 3],","          ['Six ∑', 4],","          ['Insights', 2],","          ['Lean Pract.', 2],","          ['CI Coaching', 4],","          ['Data Analytics', 3]","        ]);","","        // Set options for Karen's pie chart.","        var options = {","          legend:'left',","          colors: ['#6300AA', '#B54DFF','#9500FF'],","          fontSize:11,","        };","","        // Instantiate and draw the chart for Karen's pizza.","        var chart = new google.visualization.PieChart(document.getElementById('Karen_chart_div'));","        chart.draw(data, options);","        ","      }","        ","        // Callback that draws the pie chart for Vale's pizza.","      function drawValeChart() {","","        // Create the data table for Vale's pizza.","        var data = new google.visualization.DataTable();","        data.addColumn('string', 'Skills');","        data.addColumn('number', '%');","        data.addRows([","          ['SQL', 2],","          ['HTML', 2],","          ['CSS', 2],","          ['Six ∑', 0],","          ['Vba', 3]","        ]);","","        // Set options for Vale's pie chart.","        var options = {","          legend:'left',","          colors: ['#6300AA', '#B54DFF', '#9500FF', '#5A2680', '#7700CC'],","          fontSize:11,","        };","","        // Instantiate and draw the chart for Vale's pizza.","        var chart = new google.visualization.PieChart(document.getElementById('Vale_chart_div'));","        chart.draw(data, options);","      }"],"id":1}],[{"start":{"row":94,"column":7},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":95,"column":0},"end":{"row":95,"column":6},"action":"insert","lines":["      "]},{"start":{"row":95,"column":6},"end":{"row":96,"column":0},"action":"insert","lines":["",""]},{"start":{"row":96,"column":0},"end":{"row":96,"column":6},"action":"insert","lines":["      "]},{"start":{"row":96,"column":6},"end":{"row":97,"column":0},"action":"insert","lines":["",""]},{"start":{"row":97,"column":0},"end":{"row":97,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":97,"column":6},"end":{"row":97,"column":32},"action":"insert","lines":["$('.collapse').collapse();"],"id":3}],[{"start":{"row":97,"column":32},"end":{"row":98,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":98,"column":0},"end":{"row":98,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":98,"column":6},"end":{"row":99,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":99,"column":0},"end":{"row":99,"column":6},"action":"insert","lines":["      "]},{"start":{"row":99,"column":6},"end":{"row":100,"column":0},"action":"insert","lines":["",""]},{"start":{"row":100,"column":0},"end":{"row":100,"column":6},"action":"insert","lines":["      "]}]]},"ace":{"folds":[],"scrolltop":1045,"scrollleft":0,"selection":{"start":{"row":100,"column":6},"end":{"row":100,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":68,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1563052328849,"hash":"993c21c0116d04efca2a421c99e60dbdaf213abd"}