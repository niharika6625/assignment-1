import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./deletemodal.css";
import Stack from "@mui/material/Stack";

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

export default function DeleteModal({
  open,
  setOpen,
  confirmDelete,
  title = "",
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <div className="modal-button">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="small"
                onClick={setOpen}
                sx={{
                  backgroundColor: "#d4d7d9",
                  color: "black",
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                Cancel
              </Button>
              <Button variant="contained" size="small" onClick={confirmDelete}>
                Confirm
              </Button>
            </Stack>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
