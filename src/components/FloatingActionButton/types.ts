type color =
  | "primary"
  | "inherit"
  | "secondary"
  | "default"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;


export interface FloatingActionButtonProps {
  color?: color;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  id?: string | undefined;
  children: React.ReactNode;
}