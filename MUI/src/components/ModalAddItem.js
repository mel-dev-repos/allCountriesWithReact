import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 300,
   height: 400,
   bgcolor: "background.paper",
   border: "none",
   boxShadow: 24,
   p: 4,
   display: "flex",
   flexDirection: "column",
};

export default function BasicModal({ newItem, setNewItem }) {
   const [skill, setSkill] = React.useState("");
   const [desc, setDesc] = React.useState("");
   const [title, setTitle] = React.useState("");
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const clickHandler = () => {
      setNewItem({title,desc,skill})
   };
   return (
      <div>
         <div onClick={handleOpen}>
            <Icon sx={{ color: red[500] }}>
               <AddCircleIcon />
            </Icon>
         </div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography sx={{ mb: 2 }} variant="h5">
                  Create a New Skills
               </Typography>
               <Typography sx={{ mb: 2 }} variant="p">
                  Please fill out the form below.
               </Typography>
               <TextField
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <FormControl variant="standard" sx={{ my: 3, minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                     Skills
                  </InputLabel>
                  <Select
                     labelId="demo-simple-select-standard-label"
                     id="demo-simple-select-standard"
                     value={skill}
                     onChange={(e) => setSkill(e.target.value)}
                  >
                     <MenuItem value={10}>Web Designe</MenuItem>
                     <MenuItem value={20}>Front End</MenuItem>
                     <MenuItem value={30}>Back End</MenuItem>
                  </Select>
               </FormControl>
               <TextField
                  sx={{ pb: 3 }}
                  id="standard-basic"
                  label="Description"
                  variant="standard"
                  multiline
                  rows={4}
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
               />
               <Button
                  onClick={clickHandler}
                  sx={{ mr: "auto" }}
                  variant="text"
               >
                  Create
               </Button>
            </Box>
         </Modal>
      </div>
   );
}
