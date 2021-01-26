const fees = [
    {
        title: "Dr Padilla and Dr Barkas Fees",
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
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Standard Consultation 10 minutes"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["Long Consultation 20 minutes"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            }
        ]
    },
    {
        title: "Dr Ramsay: Private Billing Fees",
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
                    ["Standard Consult", "(less than 20 minutes)"],
                    "$73.75",
                    "$38.75",
                    "$35.00"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Long Consult", "(more than 20 minutes)"],
                    "$110.05",
                    "$75.05",
                    "$35.00"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["Pensioner Standard Consult", "(less than 20 minutes)"],
                    "$58.75",
                    "$38.75",
                    "$20.00"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Pensioner Long Consult", "(more than 20 minutes)"],
                    "$95.05",
                    "$75.05",
                    "$20.00"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["DVA Patients"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
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