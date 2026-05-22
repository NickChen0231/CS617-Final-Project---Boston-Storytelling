const barSpec = {
    width: 500,
    height: 350,

    data: {
        values: [
            { Group: "Chinese", Population: 34613 },
            { Group: "Indian", Population: 12612 },
            { Group: "Vietnamese", Population: 10010 },
            { Group: "Korean", Population: 3541 },
            { Group: "Filipino", Population: 1826 },
            { Group: "Japanese", Population: 1128 },
            { Group: "Other Asians", Population: 9116 }
        ]
    },

    layer: [
        {
            mark: {
                type: "bar",
                cornerRadiusTopLeft: 6,
                cornerRadiusTopRight: 6
            },
            encoding: {
                color: {
                    field: "Group",
                    type: "nominal",
                    legend: null,
                    scale: subgroupColorScale
                }
            }
        },
        {
            mark: {
                type: "text",
                dy: -8,
                fontSize: 11,
                color: "black"
            },
            encoding: {
                text: {
                    field: "Population",
                    type: "quantitative",
                    format: ","
                }
            }
        }
    ],

    encoding: {
        x: {
            field: "Group",
            type: "nominal",
            sort: "-y",
            title: "Asian Group",
            axis: {
                labelAngle: 0,
                labelPadding: 5
            }
        },
        y: {
            field: "Population",
            type: "quantitative",
            title: "Population"
        },
        tooltip: [
            { field: "Group", type: "nominal", title: "Group" },
            { field: "Population", type: "quantitative", title: "Population", format: "," }
        ]
    },

    view: {
        stroke: null
    }
};

vegaEmbed("#chart2", barSpec, chartTheme);