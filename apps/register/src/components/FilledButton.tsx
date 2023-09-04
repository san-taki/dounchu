import { ReactNode } from "react";
import { Button } from "@mui/material";

type FilledButtonProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler;
};

const FilledButton = ({ children, onClick }: FilledButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default FilledButton;
