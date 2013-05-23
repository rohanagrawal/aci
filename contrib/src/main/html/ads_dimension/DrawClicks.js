/*
 *  Copyright (c) 2012-2013 Malhar, Inc.
 *  All Rights Reserved.
 */


/**
 * Creates data table with time stamp and clicks values.
 * Draw line chart for time vs clicks.
 * @author Dinesh Prasad (dinesh@malhar-inc.com).
 */
function DrawClickChart(dataArr)
{
  // Populate data table with time/cost data points. 
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn('date', 'Time');
  dataTable.addColumn('number', 'Clicks');
  dataTable.addRows(dataArr.length);
  for(var i=0; i < dataArr.length; i++)
  {
    dataTable.setCell(i, 0, new Date(parseInt(dataArr[i].timestamp)));
    dataTable.setCell(i, 1, parseInt(dataArr[i].clicks));
  }

  // Format time column in readable value.
  var formatter3 = new google.visualization.DateFormat({pattern: "h:m:s aa" , timeZone: -7});
  formatter3.format(dataTable, 0);
  //document.getElementById("chart_div").innerHTML = dataTable.toJSON();

  // Draw line chart.
  var dataView = new google.visualization.DataView(dataTable);
  dataView.setColumns([{calc: function(data, row) { return data.getFormattedValue(row, 0); }, type:'string'}, 1]);
  var chart = new google.visualization.LineChart(document.getElementById('chart2_div'));
  var options = {
    title: 'Clicks Chart',
    width: 500, height: 300,
    legend: 'none',
    pointSize: 2,
  };
  chart.draw(dataView, options);
}
