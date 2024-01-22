
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import './Table.css';



export const Table = (props) => {
    const { data, handleDeleteOpen, handleEditOpen } = props;
    const [hoveredRow, setHoveredRow] = useState(null);

    const handleRowHover = (index) => {
        setHoveredRow(index);
    };

    const handleRowLeave = () => {
        setHoveredRow(null);
    };

    const getClass = (grade) => {
        switch (grade.toLowerCase()) {
            case "excellent":
                return "excellent";
            case "poor":
                return "poor";
            case "average":
                return "average";
        }
    }

    const handleDelete = (index) => {
        handleDeleteOpen(index)
    }

    return (
        <table className="custom-table">
            <tr>
                <th>No.</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Result</th>
                <th>Score</th>
                <th>Grade</th>
                <th></th>
            </tr>
            {
                data.map((item, index) => {
                    return (
                        <tr
                            key={item.id}
                            className={hoveredRow === index ? 'hovered' : ''}
                            onMouseEnter={() => handleRowHover(index)}
                            onMouseLeave={handleRowLeave}>
                            <td>{item.id}</td>
                            <td>{item.fullName}</td>
                            <td>{item.class}</td>
                            <td>{item.Result.toLowerCase() === "passed" || item.Result.toLowerCase() === "pass" ?
                                <div className='pill success-tab'>Passed</div> :
                                <div className='pill fail-tab'>Failed</div>
                            }</td>
                            <td>{item.score}/100</td>
                            <td className={item.grade ? getClass(item.grade) : ""}>{item.grade}</td>
                            <td style={{ width: '90px' }}>
                                <div className={hoveredRow === index ? 'display-action' : 'no-display'}>
                                    <CiEdit onClick={() => handleEditOpen(index)} style={{ marginRight: '10px' }} />
                                    <MdDeleteOutline onClick={() => handleDelete(index)} />
                                </div></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}