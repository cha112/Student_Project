import { Table } from "./Table";
import './App.css';
import { Header } from "./header";
import { useState } from "react";
import { TableData } from "./TableData";
import { SideBar } from "./SideBar";
import { Modal } from '@mui/material';

import DeleteStudent from './DeleteStudent';
import AddStudent from "./AddStudent";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400
};

const editStyle = {
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

const App = () => {

  const [data, setData] = useState(TableData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [ editRow, setEditRow] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const onDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    console.log("hi")
  };

  const addData = (row) => {
    let temp = [...data];
    const newRow = {};
    newRow.id = temp.length + 1;
    newRow.class = row.studentClass + "th";
    newRow.fullName = row.name;
    newRow.grade = row.grade;
    newRow.score = row.score;
    newRow.Result = row.result;
    temp.push(newRow)
    setData(temp);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ editOpen, setEditOpen ] = useState(false);
  const handleEditClose = () => setEditOpen(false);

  const handleDeleteOpen = (index) => {
    setSelectedRow(data[index]);
    setDeleteIndex(index);
    setOpen(true);
  }
  const handleEditOpen = (index) => {
    setEditIndex(index);
    setEditRow(data[index]);
    setEditOpen(true);
  }
  const onRemove = () => {
    let tempData  = data.filter((item, index) => index !== deleteIndex);
    setData(tempData);
    setOpen(false);
  }

  const handleEditStudent = (row) => {
    
    let tempData = [...data];
    let newRow = {};
    newRow.class = row.studentClass + "th";
    newRow.fullName = row.name;
    newRow.grade = row.grade;
    newRow.score = row.score;
    newRow.Result = row.result;
    newRow.id = tempData[editIndex].id;
    tempData[editIndex] = newRow;
    setData(tempData);
    handleEditClose();
  }

  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Header addData={addData} />
        <Table data={data} handleDeleteOpen={handleDeleteOpen} handleEditOpen={handleEditOpen} />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={style}>
            <DeleteStudent student={selectedRow}
              deleteStudent={handleDeleteOpen}
              onRemove={onRemove}
              onClose={handleClose}></DeleteStudent>
          </div>
        </Modal>


        <Modal
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <div style={editStyle}>
                <AddStudent 
                data={editRow}
                editStudent={handleEditStudent}
                handleClose={handleEditClose}></AddStudent>
              </div>
            </Modal>


      </div>
    </div>
  )
}

export default App;