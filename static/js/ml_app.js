// import the data from data.js
const tableData = ml_data;

// D3 is a JavaScript library that produces sophisticated 
// and highly dynamic graphics in an HTML webpage. 
// It is often used by data professionals to create dashboards, 
// or a collection of visual data (such as graphs and maps), for presentation.

// Reference the HTML table (tagged as 'tbody') using d3 
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html(""); // clear the existing table

    //loop through each object in the data
    data.forEach((dataRow) => {  //forEach only works for Arrays
        let row = tbody.append("tr"); // add a table row to 'tbody'

        // loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => { // 'Object.values' tells js to reference one object from the array of UFO sightings.
            let cell = row.append("td"); // add a table cell to table row
            cell.text(val); // add the value to table cell
        });
    });
}

// function handleClick() {
//     let date = d3.select('#datetime').property('value'); // select the first element matching selector string '#datetime'
//     let filteredData = tableData;
//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date); // '===': strict match; '==' loose match.
//     }
//     buildTable(filteredData);
// }

// d3.select('#filter-btn').on('click', handleClick);

buildTable(tableData); // to load the un-filtered table when page is loaded for the first time