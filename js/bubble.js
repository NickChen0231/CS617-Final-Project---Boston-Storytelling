const povertyData = [
    { Group: "Chinese", PovertyRate: 32.8 },
    { Group: "Indian", PovertyRate: 22.4 },
    { Group: "Vietnamese", PovertyRate: 20.3 },
    { Group: "Korean", PovertyRate: 31.2 },
    { Group: "Filipino", PovertyRate: 14.1 },
    { Group: "Japanese", PovertyRate: 19.6 }
];

const width = 650;
const height = 600;

const svg = d3.select("#bubbleChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const radiusScale = d3.scaleSqrt()
    .domain([0, d3.max(povertyData, d => d.PovertyRate)])
    .range([25, 85]);

const colorScale = d3.scaleOrdinal()
    .domain([
        "Chinese",
        "Indian",
        "Vietnamese",
        "Korean",
        "Filipino",
        "Japanese"
    ])
    .range([
        "#99000d",
        "#cb181d",
        "#ef3b2c",
        "#fb6a4a",
        "#fc9272",
        "#fcbba1"
    ]);

const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "8px 12px")
    .style("border-radius", "8px")
    .style("box-shadow", "0 4px 12px rgba(0,0,0,0.15)")
    .style("font-size", "14px")
    .style("opacity", 0);

const simulation = d3.forceSimulation(povertyData)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("charge", d3.forceManyBody().strength(8))
    .force("collision", d3.forceCollide(d => radiusScale(d.PovertyRate) + 4))
    .on("tick", ticked);

const bubbles = svg.selectAll("circle")
    .data(povertyData)
    .enter()
    .append("circle")
    .attr("r", d => radiusScale(d.PovertyRate))
    .attr("fill", d => colorScale(d.Group))
    .attr("opacity", 0.85)
    .on("mouseover", function(event, d) {
        d3.select(this)
            .transition()
            .duration(150)
            .attr("r", radiusScale(d.PovertyRate) + 8)
            .attr("opacity", 1);

        tooltip
            .style("opacity", 1)
            .html(`<strong>${d.Group}</strong><br>${d.PovertyRate}% below poverty line`);
    })
    .on("mousemove", function(event) {
        tooltip
            .style("left", event.pageX + 12 + "px")
            .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function(event, d) {
        d3.select(this)
            .transition()
            .duration(150)
            .attr("r", radiusScale(d.PovertyRate))
            .attr("opacity", 0.85);

        tooltip.style("opacity", 0);
    });

const labels = svg.selectAll("text")
    .data(povertyData)
    .enter()
    .append("text")
    .text(d => `${d.Group} ${d.PovertyRate}%`)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "#1e293b")
    .attr("pointer-events", "none");

function ticked() {
    bubbles
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    labels
        .attr("x", d => d.x)
        .attr("y", d => d.y + 4);
}