const fees = [
    {
        header: [
            [""],
            ["Amount Payable", "on the day"],
            ["Medicare Rebate", "on the day"],
            ["Out of pocket", "cost"]
        ],
        row: [
            {
                rownum: 1,
                data: [
                    ["Pensioners Health", "Card Holders"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Children under 16 yrs", "Adolescents 16-25 yrs"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["DVA Patients"],
                    "Bulk Billed	",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Standard Consultation 10 minutes"],
                    "$63.20",
                    "$38.20",
                    "$25.00"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["Long Consultation 20 minutes"],
                    "$98.95",
                    "$73.95",
                    "$25.00"
                ]

            }
        ]
    }
    

]

export default fees;

/*
{
    headers: [
        "",
        "Amount Payable on the day",
        "Medicare Rebate on the day",
        "Out of pocket cost"
    ],
    values: [ 
        { label: "Pensioners Health Card Holders", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "Children under 16 yrs Adolescents 16-25 yrs", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "DVA Patients", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "Standard Consultation 10 minutes", value1: "$63.20", value2: "$38.20", value3: "$25.00" },
        { label: "Long Consultation 20 minutes", value1: "$98.95", value2: "$73.95", value3: "$25.00" }
    ]

}

*/