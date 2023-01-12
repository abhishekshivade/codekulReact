// import {TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
// import { useForm } from "react-hook-form";
import CommonTable from "../homepage/common/CommonTable";
import MainModel from "./MainModel";

const loginData = {
  message: "Login List",
  result: [
    {
      id: 1,
      email: "john@gmail.com",
      firstName: "doe",
      // lastName: "doe",
      mobileNumber: "123456",
      address: "codeKul,pune",
      pinCode: "424210",
      password: "2345",
    },
  ],
  statusCode: "200",
  actions: ["Edit", "Delete"],
};

function Form() {
  const [data, setData] = React.useState({ actions: [], result: [] });
  const [dataResult, setDataResult] = React.useState([]);

  // //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setData(loginData);
    setDataResult(loginData.result);
  }, []);

  const deleteRows = (index) => {
    const rows = [...dataResult];
    rows.splice(index, 1);
    setData(rows);
    console.log("Deleted rows are", rows);
  };
  return (
    <div className="mt-12 grid justify-center">
      <Button onClick={handleOpen}>Open Model</Button>

      <>
        {data.statusCode === "200" && data.result.length > 0 ? (
          <CommonTable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
            deleteRows={deleteRows}
          />
        ) : null}
      </>

      <MainModel
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default Form;
