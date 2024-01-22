import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddStudent = (props) => {
  const { addStudent, handleClose, data, editStudent } = props;
  const [formData, setFormData] = useState({
    name: '',
    studentClass: '',
    score: '',
    result: '',
    grade: '',
  });

  useEffect(() => {
    if(data && Object.keys(data)) {
      console.log('data', data);
      setFormData({
        name: data.fullName,
        studentClass: data.class.split("th")[0],
        score: data.score,
        result: data.Result,
        grade: data.grade
      })
    }
  },[data])

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.studentClass) {
      errors.studentClass = 'Class is required';
    }
    else if (isNaN(formData.studentClass) || formData.studentClass <= 0 || formData.studentClass > 12) {
      errors.studentClass = 'Please input values between 1 & 12';
    }
    if (!formData.score) {
      errors.score = 'Score is required';
    } else if (isNaN(formData.score) || formData.score < 0 || formData.score > 100) {
      errors.score = 'Please input values between 0 & 100';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleConfirm = () => {
    if (!validateForm()) {
      return;
    }

    if(data && Object.keys(data)) {
      editStudent(formData);
      return;
    }
    // Add your logic to handle the confirmed form data
    console.log('Form data:', formData);
    addStudent(formData);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      studentClass: '',
      score: '',
      result: '',
      grade: '',
    });
    setErrors({});
    // Add your logic to handle the cancel button click
    console.log('Form cancelled');
    handleClose()
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-1">
        {data && Object.keys(data) ? "Edit Student" : "Add Student"}</h2>
      <form>
        <div className="mb-1">
          <label className="form-label">STUDENT NAME*</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-1">
          <label className="form-label">CLASS*</label>
          <input
            type="text"
            className={`form-control ${errors.studentClass ? 'is-invalid' : ''}`}
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
          />
          {errors.studentClass && <div className="invalid-feedback">{errors.studentClass}</div>}
        </div>
        <div className="mb-1">
          <label className="form-label">SCORE*</label>
          <input
            type="text"
            className={`form-control ${errors.score ? 'is-invalid' : ''}`}
            name="score"
            value={formData.score}
            onChange={handleChange}
          />
          {errors.score && <div className="invalid-feedback">{errors.score}</div>}
        </div>
        <div className="mb-1">
          <label className="form-label">RESULT</label>
          <input
            type="text"
            className="form-control"
            name="result"
            value={formData.result}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">GRADE</label>
          <input
            type="text"
            className="form-control"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginTop: "40px" }}>
        <button className="btn btn-primary me-md-2" onClick={handleConfirm}>
          Confirm
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default AddStudent;