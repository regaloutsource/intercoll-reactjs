export  type deleteDialogProps = {
    fullScreen: boolean,
    open: boolean,
    handleClose: ()=>void,
    removeItem: (id:number) => void,
    id:number
}