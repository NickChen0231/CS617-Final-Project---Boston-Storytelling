const educationBarSpec = {
    width: 650,
    height: 350,

    data: {
        values: [
            { Group: "Indian", BachelorOrHigher: 85 },
            { Group: "Chinese", BachelorOrHigher: 60 },
            { Group: "Korean", BachelorOrHigher: 81 },
            { Group: "Filipino", BachelorOrHigher: 66 },
            { Group: "Vietnamese", BachelorOrHigher: 31 },
            { Group: "Japanese", BachelorOrHigher: 80 }
        ]
    },

    transform: [
        {
            calculate: "format(datum.BachelorOrHigher, '.1f') + '%'",
            as: "label"
        }
    ],

    layer: [
        {
            mark: {
                type: "bar",
                cornerRadiusTopRight: 6,
                cornerRadiusBottomRight: 6
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
                dx: 8,
                align: "left",
                fontSize: 11,
                color: "#374151"
            },
            encoding: {
                text: {
                    field: "label",
                    type: "nominal"
                }
            }
        }
    ],

    encoding: {
        y: {
            field: "Group",
            type: "nominal",
            sort: "-x",
            title: "Asian Group"
        },
        x: {
            field: "BachelorOrHigher",
            type: "quantitative",
            title: "Bachelor's Degree or Higher (%)",
            scale: {
                domain: [0, 100]
            }
        },
        tooltip: [
            { field: "Group", type: "nominal", title: "Group" },
            { field: "BachelorOrHigher", type: "quantitative", title: "Bachelor's Degree or Higher", format: ".1f" }
        ]
    },

    view: {
        stroke: null
    }
};

vegaEmbed("#chart4", educationBarSpec, chartTheme);