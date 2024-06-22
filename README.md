# Coding Challenge 11
# Dynamic Bar Chart

This project involves creating a dynamic bar chart using D3.js to accurately represent a dataset through proportional bar lengths. Each bar should display its corresponding value and include interactive elements like hover effects and transitions.

## Tasks

-Initialize SVG container within body of HTML document and define dimensions for SVG container.
-Implement a linear scale for the x-axis using `d3.scaleLinear()`.
-For each data point, create a `<g>` element within the SVG that will house both `<rect>` for the bar and `<text>` for the label.
-Append text label inside each bar group and ensure hte label displays the data value and is vertically centered for readability.
-Add transition effect to animate the bars' growth from left to right as they load.