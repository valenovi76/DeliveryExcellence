      // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart for Michelle's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawMichelleChart);

      // Draw the pie chart for the Karen's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawKarenChart);
      
      // Draw the pie chart for the Vale's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawValeChart);

      // Callback that draws the pie chart for Michelle's pizza.
      function drawMichelleChart() {

        // Create the data table for Michelle's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Skills');
        data.addColumn('number', '%');
        data.addRows([
          ['Project Management', 5],
          ['Six ∑', 4],
          ['Lean Pract.', 2],
          ['CI Coaching', 5],
        ]);

        // Set options for Michelle's pie chart.
        var options = {legend:'left',
                       colors: ['#6300AA', '#B54DFF', '#9500FF', '#5A2680', '#7700CC'],
                       fontSize:11,
                       pieSliceText:'percentage',
                       sliceVisibilityThreshold:1/720,
                       
        };

        // Instantiate and draw the chart for Michelle's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Michelle_chart_div'));
        chart.draw(data, options);
      }

      // Callback that draws the pie chart for Karen's pizza.
      function drawKarenChart() {

        // Create the data table for Karen's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Skills');
        data.addColumn('number', '%');
        data.addRows([
          ['Project Management', 3],
          ['Six ∑', 4],
          ['CI Coaching', 4],
          ['Data Analytics', 3]
        ]);

        // Set options for Karen's pie chart.
        var options = {
          legend:'left',
          colors: ['#6300AA', '#B54DFF','#9500FF'],
          fontSize:11,
        };

        // Instantiate and draw the chart for Karen's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Karen_chart_div'));
        chart.draw(data, options);
        
      }
        
        // Callback that draws the pie chart for Vale's pizza.
      function drawValeChart() {

        // Create the data table for Vale's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Skills');
        data.addColumn('number', '%');
        data.addRows([
          ['SQL', 2],
          ['HTML', 2],
          ['CSS', 2],
          ['Six ∑', 0],
          ['Vba', 3]
        ]);

        // Set options for Vale's pie chart.
        var options = {
          legend:'left',
          colors: ['#6300AA', '#B54DFF', '#9500FF', '#5A2680', '#7700CC'],
          fontSize:11,
        };

        // Instantiate and draw the chart for Vale's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Vale_chart_div'));
        chart.draw(data, options);
      }
      
      
      $('.collapse').collapse();
      
      
      