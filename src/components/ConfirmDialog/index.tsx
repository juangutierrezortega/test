import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import View from "./view";
import { IModal } from "../Modal/types";

interface ConfirmDialogProps extends IModal {
  title: string;
  text: string;
  handleConfirm?: (optional?: any) => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return <View {...props} fullScreen={fullScreen} />;
};
export default ConfirmDialog;
