import * as React from 'react';
import Modal from '@mui/material/Modal';
import { TableData } from './TableData';
import AddStudent from './AddStudent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    backgroundColor: "white",
    height: "600px",
    borderRadius: "10px"
};

export const Header = (props) => {
    const { addData } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ form, setForm] = React.useState({});

    const handleAdd = (studentInfo) => {
        addData(studentInfo);
        setOpen(false);
    }

    return (
        <div className="header">
            <h1>Students</h1>
            <button className="add-button" onClick={handleOpen}> + Add</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <div style={style}>
                <AddStudent addStudent={handleAdd}
                handleClose={handleClose}></AddStudent>
              </div>
            </Modal>
        </div>
    )
}