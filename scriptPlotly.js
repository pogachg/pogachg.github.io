Plotly.d3.csv('global-shark-attack.csv', function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var currentYear = new Date().getFullYear(); // Get the current year
  var attacksByYear = {};  // Store attacks with year as key and count as value

  // Loop through data to count attacks by year
  rows.forEach(function(row) {
    var year = parseInt(row['Year']);
    // filter for only unprovoked (Type field) and attacks (Year field) since 1950
    if (row['Type'] === 'Unprovoked' && year >= 1950 && year <= currentYear) {
      if (attacksByYear[year]) {
        attacksByYear[year] += 1;
      } else {
        attacksByYear[year] = 1;
      }
    }
  });

  // Create years and counts list for Plotly's x-axis and y-axis
  var years = Object.keys(attacksByYear).map(Number).sort((a, b) => a - b); // Convert to numbers and sort
  var counts = years.map(year => attacksByYear[year]); // Map the years to their counts

  var data = [{
    type: 'bar',
    x: years,
    y: counts,
  }];

  var layout = {
    title: 'Unprovoked Shark Attacks by Year (1950 - Present)',
    xaxis: { title: 'Year' }, // changed from x to xaxis so title shows on graph
    yaxis: { title: 'Number of Attacks' } // changed from y to yaxis so title shows on graph
  };

  Plotly.plot('barPlot', data, layout);
});
