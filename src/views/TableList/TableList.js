import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Type", "Creator", "Description", "Action"]}
              tableData={[
                ["1", "DNS Automation", "Lambda", "Mridu", "DNS creator process", "EDIT"],
                ["2", "RBAC Operator", "EKS", "Nimish", "eks operator", "EDIT"],
                ["3", "EKS Kill Switch ", "Nomad", "Gaurav", "nomad skill switch", "EDIT"],
                [
                  "4",
                  "Aqua Enforcer",
                  "Binary",
                  "Ramneek",
                    "It a aqua binary",
                    "EDIT"
                ],
                [
                  "5",
                  "Snapshot Scheduler",
                  "EKS",
                  "Chandan",
                    "It is for snapshot backup",
                  "EDIT"
                ],
                ["6", "EKS Secrets Manager", "Amazon Parameter Store", "Ramneek", "It is for secret managment", "EDIT"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}