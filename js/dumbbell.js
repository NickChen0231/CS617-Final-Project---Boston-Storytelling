const dumbbellSpec = {
    width: 650,
    height: 350,

    data: {
        values: [
            { Group: "Chinese", LowIncome: 35321, HighIncome: 46007 },
            { Group: "Indian", LowIncome: 97157, HighIncome: 116001 },
            { Group: "Vietnamese", LowIncome: 30701, HighIncome: 62181 },
            { Group: "Korean", LowIncome: 59484, HighIncome: 95596 },
            { Group: "Filipino", LowIncome: 53046, HighIncome: 135704 },
            { Group: "Japanese", LowIncome: 50414, HighIncome: 115162 }
        ]
    },

    layer: [
        {
            mark: {
                type: "rule",
                strokeWidth: 3,
                color: "#EAD7D1"
            },
            encoding: {
                y: {
                    field: "Group",
                    type: "nominal",
                    title: "Asian Group"
                },
                x: {
                    field: "LowIncome",
                    type: "quantitative",
                    title: "Income Range"
                },
                x2: {
                    field: "HighIncome"
                }
            }
        },
        {
            mark: {
                type: "circle",
                size: 140,
                color: "#99000d"
            },
            encoding: {
                y: { field: "Group", type: "nominal" },
                x: { field: "LowIncome", type: "quantitative" },
                tooltip: [
                    { field: "Group", type: "nominal" },
                    { field: "LowIncome", type: "quantitative", title: "Lower Income", format: "$," }
                ]
            }
        },
        {
            mark: {
                type: "circle",
                size: 140,
                color: "#fc9272"
            },
            encoding: {
                y: { field: "Group", type: "nominal" },
                x: { field: "HighIncome", type: "quantitative" },
                tooltip: [
                    { field: "Group", type: "nominal" },
                    { field: "HighIncome", type: "quantitative", title: "Higher Income", format: "$," }
                ]
            }
        },
        {
            mark: {
                type: "text",
                dx: -10,
                align: "right",
                fontSize: 11,
                color: "#374151"
            },
            encoding: {
                y: { field: "Group", type: "nominal" },
                x: { field: "LowIncome", type: "quantitative" },
                text: { field: "LowIncome", type: "quantitative", format: "$," }
            }
        },
        {
            mark: {
                type: "text",
                dx: 10,
                align: "left",
                fontSize: 11,
                color: "#374151"
            },
            encoding: {
                y: { field: "Group", type: "nominal" },
                x: { field: "HighIncome", type: "quantitative" },
                text: { field: "HighIncome", type: "quantitative", format: "$," }
            }
        }
    ],

    view: {
        stroke: null
    }
};

vegaEmbed("#chart3", dumbbellSpec, chartTheme);