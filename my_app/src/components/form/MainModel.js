import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import {Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CancelPresentationIcon from "@mui/icons-material";
import CommonTable from "../homepage/common/CommonTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const loginData = {
  massage: "Login List",
  result: [
    {
      Id: 1,
      firstName: "John",
      lastName: "Doe",
      mobileNumber: "9876543210",
      address: "Nashik",
      pinCode: "423104",
      password: "1234"
    },
  ],
  statusCode: "200",
  actions: ["Edit","Delete"],
};

export default function TransitionsModal(props) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Please enter correct email"),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("Password should have atleast 8 character long"),
    mobileNumber: yup
      .number()
      .typeError("Mobile number must be a number")
      .nullable()
      .moreThan(0,"Floor area cannot be negative")
      .transform((_,val)=> (val !== "" ? Number(val) : null))
      .required("Mobile number should not be empty"),
    fullName: yup.
      string()
      .min(8)
      .max(16)
      .required("Full Name should not be empty"),
    pinCode: yup
      .number()
      .typeError("Pin Code must be a number")
      .nullable()
      .moreThan(0,"Floor area can not be negative")
      .transform((_,val)=>(val !== "" ? Number(val) : null))
      .required("Pincode should not be empty"),
    address: yup.
      string()
      .min(18)
      .max(56)
      .required("Address should not be empty"),
  });

  const [data,setdata]= React.useState({actions : [], result:[]});
  const [dataResult,setDataResult]= React.useState([]);

  React.useEffect(() => {
    setdata(loginData);
    setDataResult(loginData.result);
  },[]);

  // TheObject to reset the form to blank values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber:"",
      password: "",
      address:"",
      pinCode:"",
    },
  });
  console.log("data",props.data);

  const onSubmit = (dataObj) => {
    let originalData = props.data;
    console.log("originalData", originalData);
    originalData.result.push(dataObj);
    props.setdata(originalData);
    props.handleClose();
    reset()
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <a
              className="flex justify-end my-3 text-red-700 cursor-pointer"
              onClick={()=> {
                props.handleClose();
              }}
            >
              <CancelPresentationIcon/>
            </a>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-2 shadow rounded border p-5">
                <div>
                  <TextField
                    required
                    id="email"
                    name="email"
                    size="small"
                    label="Email"
                    fullWidth
                    {...register("email")}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    {...register("fullName")}
                  />
                  <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                    {errors.fullName?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Mobile NUmber"
                    name="mobileNumber"
                    fullWidth
                    {...register("mobileNumber")}
                  />
                  <Typography variant="inherit" color="tetSecondary">
                    {errors.mobileNumber?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Password"
                    name="password"
                    fullWidth
                    {...register("password")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Address"
                    name="address"
                    fullWidth
                    {...register("address")}
                  />
                  <Typography variant="inherit" color="textScondary">
                    {errors.address?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Pincode"
                    name="pinCode"
                    {...register("pinCode")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.pinCode?.message}
                  </Typography>
                </div>
                <div className="col-span-3 fleax justify-centre space-x-2">
                  <button
                    className="border border-red-700 tet-red-700 rounded p-2 px-4"
                    type="button"
                    onClick={() =>{
                      reset();
                    }}
                    variant="outlined"
                    color="warning"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    variant="contained"
                    className="bg-blue-700 text-white rounded p-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <>
              {data.result.length > 0 ? (
                <CommonTable
                  data={data}
                  dataResult={setDataResult}
                />
              ) : null}
            </>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}