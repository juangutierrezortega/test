export interface IModal {
    open: boolean,
    handleOpen?: () => void,
    handleClose: () => void,
    children: any,
}