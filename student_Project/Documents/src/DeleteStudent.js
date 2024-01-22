import React, { useState } from 'react';
import './DeleteStudent.css'; // Import your CSS file for styling

const DeleteStudent = ({ student, onClose, onRemove, handleDelete }) => {
    const handleRemove = () => {
        onRemove();
    };

    const handleCancel = () => {
        onClose();
    };

    console.log('student', student);

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <h5>Remove Student</h5>
                </div>
                <h4>Are you sure you want to remove the current student from the list?</h4>
                <div className="popup-body">
                    <div className='info'>
                        <label className='heading'>Student Name</label>
                        <span>{student.fullName}</span>
                    </div>

                    <div className='info'>
                        <label className='heading'>Class</label>
                        <span>{student.class}</span>
                    </div>
                </div>
                <div className="popup-footer">
                    <button className="remove-button" onClick={handleRemove}>
                        Remove
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteStudent;
