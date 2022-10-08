import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { IModal } from "../Modal/types";

interface ConfirmDialgoProps extends IModal {
  title: string;
  text: string;
  handleConfirm?: () => void;
  fullScreen: any;
}

const ConfirmDialog: React.FC<ConfirmDialgoProps> = ({
  open,
  handleClose,
  title,
  text,
  fullScreen,
  handleConfirm,
}) => {
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <Button onClick={handleConfirm} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
