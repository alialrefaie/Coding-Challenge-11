// Data array assumption
const data = [100, 420, 230, 850, 560, 295];

// SVG margins and dimensions
const width = 500;
const height = data.length * 21;
const svg = d3.select("svg").attr("width", width).attr("height", height);

// X-axis scaling
const xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

// Render bars
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * 21)
    .attr("width", d => xScale(d))
    .attr("height", 20)
    .attr("fill", "steelblue");

// Text labels
svg.selectAll(".text")
    .data(data)
    .enter().append("text")
    .attr("x", d => xScale(d) + 3)
    .attr("y", (d, i) => i * 21 + 10)
    .attr ("dy", ".35em")
    .text(d => d);