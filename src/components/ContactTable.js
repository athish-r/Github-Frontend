import React from "react";
import DataTable from "react-data-table-component";

const ContactTable = ({ contacts, onEdit, onDelete }) => {
    const columns = [
        { name: "First Name", selector: (row) => row.FirstName },
        { name: "Last Name", selector: (row) => row.LastName },
        { name: "Email", selector: (row) => row.Email },
        { name: "Phone", selector: (row) => row.Phone },
        { name: "Company", selector: (row) => row.Company },
        { name: "Job Title", selector: (row) => row.JobTitle },
        {
            name: "Actions",
            cell: (row) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        onClick={() => onEdit(row)}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#1aac83",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(row._id)}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#e7195a",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <DataTable
            title="Contact List"
            columns={columns}
            data={contacts}
            pagination
        />
    );
};

export default ContactTable;
