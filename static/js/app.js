// Sample data from data.js:
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   }

// From data.js
var tableData = data;
console.log(tableData);

// Select table body
var tbody = d3.select("tbody");

// Add table values for each column
tableData.forEach((sighting) => {
    console.log(sighting);
    // Append one table row `tr` for each table values
    var row = tbody.append("tr");

    // Use `Object.entries` and console.log each table values
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(key, value);
      // Append a cell to the row for each value
      row.append("td").text(value)
    });
  });


// Create event handlers for clicking the button or pressing the enter key
var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    // Filter reports
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);

    // Display the filtered dataset
    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);
            row.append('td').text(value)
    });
});
};