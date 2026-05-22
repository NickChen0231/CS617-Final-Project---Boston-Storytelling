const donutSpec = {
    width: 450,
    height: 450,

    data: {
        values: [
            { Group: "White", percentage: 44.1 },
            { Group: "Asian", percentage: 10.4 },
            { Group: "Black", percentage: 20.5 },
            { Group: "Two or More Races", percentage: 15.3 },
            { Group: "Other", percentage: 9.7 }
        ]
    },

    layer: [
        {
            params: [
                {
                    name: "hover",
                    select: {
                        type: "point",
                        on: "mouseover"
                    }
                }
            ],

            mark: {
                type: "arc",
                innerRadius: 110,
                stroke: "white",
                strokeWidth: 3
            },

            encoding: {
                theta: {
                    field: "percentage",
                    type: "quantitative"
                },

                color: {
                    field: "Group",
                    type: "nominal",
                    legend: {
                        title: "Ethnicity"
                    },
                    scale: {
                        domain: [
                            "White",
                            "Asian",
                            "Black",
                            "Two or More Races",
                            "Other"
                        ],
                        range: [
                            "#9DBBD9",
                            "#99000d",
                            "#F6C28B",
                            "#A8D5BA",
                            "#D8C2E0"
                        ]
                    }
                },

                radiusOffset: {
                    condition: {
                        param: "hover",
                        value: 20
                    },
                    value: 0
                },

                opacity: {
                    condition: {
                        param: "hover",
                        value: 1
                    },
                    value: 0.85
                },

                tooltip: [
                    { field: "Group", type: "nominal", title: "Group" },
                    { field: "percentage", type: "quantitative", title: "Population %", format: ".1f" }
                ]
            }
        },

        {
            data: {
                values: [{ label: "10.4%" }]
            },
            mark: {
                type: "text",
                fontSize: 36,
                fontWeight: "bold",
                color: "#99000d",
                dy: -10
            },
            encoding: {
                text: {
                    field: "label",
                    type: "nominal"
                }
            }
        },

        {
            data: {
                values: [{ label: "Asian" }]
            },
            mark: {
                type: "text",
                fontSize: 18,
                color: "#6b7280",
                dy: 24
            },
            encoding: {
                text: {
                    field: "label",
                    type: "nominal"
                }
            }
        }
    ],

    view: {
        stroke: null
    }
};

vegaEmbed("#chart1", donutSpec, chartTheme);