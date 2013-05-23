/*
 *  Copyright (c) 2012-2013 Malhar, Inc.
 *  All Rights Reserved.
 */
    
/**
 * Creates data table with time stamp and impressions values.
 * Draw line chart for time vs impressions.
 * @author Dinesh Prasad (dinesh@malhar-inc.com).
 */
function DrawImpressionChart(dataArr)
{
  // Populate data table with time/impressions data points. 
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn('date', 'Time');
  dataTable.addColumn('number', 'Impressions');
  dataTable.addRows(dataArr.length);
  for(var i=0; i < dataArr.length; i++)
  {
    dataTable.setCell(i, 0, new Date(parseInt(dataArr[i].timestamp)));
    dataTable.setCell(i, 1, parseInt(dataArr[i].impressions));
  }

  // Format time column in readable value.
  var formatter3 = new google.visualization.DateFormat({pattern: "h:m:s aa", timeZone: -7});
  formatter3.format(dataTable, 0);
  //document.getElementById("chart_div").innerHTML = dataTable.toJSON();

  // Draw line chart.
  var dataView = new google.visualization.DataView(dataTable);
  dataView.setColumns([{calc: function(data, row) { return data.getFormattedValue(row, 0); }, type:'string'}, 1]);
  var chart = new google.visualization.LineChart(document.getElementById('chart3_div'));
  var options = {
    title: 'Impressions Chart',
    width: 500, height: 300,
    legend: 'none',
    pointSize: 2,
  };
  chart.draw(dataView, options);
}
