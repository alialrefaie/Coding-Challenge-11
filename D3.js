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