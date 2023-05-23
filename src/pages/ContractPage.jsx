import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContractData, selectorContract } from "../store/reducers/contract";
import "./contract.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CardHeader from "@mui/material/CardHeader";

import { fetchContractList } from "../store/reducers/contract/thunk";

const ContractPage = () => {
  const dispatch = useDispatch();
  const contract = useSelector(selectorContract);

  useEffect(() => {
    dispatch(fetchContractList());
  }, [dispatch]);

  return (
    <div className="cont-wrap">
      {" "}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Contracts</Typography>
      </Breadcrumbs>
      <div className="cont-header">
        <h1>&#91; Contracts &#93;</h1>
      </div>
      <div className="cont-content">
        <Grid container rowSpacing={4}>
          {contract.contractData.map(({ id, name, customerId, type }) => {
            return (
              <Grid item xs={2}>
                <div>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardHeader
                      title={name}
                      sx={{ backgroundColor: "#d4d7d9" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {type}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Id : {id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Customer Id : {customerId}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ContractPage;
