import React from "react";
import { Table, Card, CardHeader } from "reactstrap";

const TableData = ({ feeData, headerRightContent }) => {
  //   console.log(feeData[0].header);
  //   console.log(feeData[0].row);
  //   console.log(feeData[0].row[0].data);
  return (
    <>
      <Card className="card-data ">
        <CardHeader className="card-header text-left ">
          <div className="clearfix">
            <div className="float-left">
              <i className="fas fa-tags fa-lg fa-icon-card-header"></i>
              Fees
            </div>
            <div className="float-right">
              {headerRightContent}
            </div>
          </div>
        </CardHeader>
        <Table striped bordered responsive style={{ marginBottom: 0 }}>
          <thead className="fees-table-row">
            <tr>
              <th>{feeData[0].header[0]}</th>
              <th>
                <div>{feeData[0].header[1][0]}</div>
                <div>{feeData[0].header[1][1]}</div>
              </th>
              <th>
                <div>{feeData[0].header[2][0]}</div>
                <div>{feeData[0].header[2][1]}</div>
              </th>
              <th>
                <div>{feeData[0].header[3][0]}</div>
                <div>{feeData[0].header[3][1]}</div>
              </th>
            </tr>
          </thead>
          <tbody className="fees-table-row ">
            {feeData[0].row.map((record, index) => (
              <tr key={record.rownum}>
                {record.data.map((rec, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="text-left">
                      <div>{rec[0]}</div>
                      <div>{rec[1]}</div>
                    </th>
                  ) : (
                    <td style={{ verticalAlign: "middle" }} key={i}>
                      {rec}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default TableData;
