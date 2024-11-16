import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ContactForm from "../components/ContactForm";

const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch("/api/contacts");
            const data = await response.json();
            if (response.ok) setContacts(data);
        };
        fetchContacts();
    }, []);

    const handleAddContact = () => {
        setCurrentContact({
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Company: "",
            JobTitle: "",
        });
        setShowPopup(true);
    };

    const handleEditContact = (contact) => {
        setCurrentContact(contact);
        setShowPopup(true);
    };

    const handleDeleteContact = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            const response = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
            if (response.ok) {
                setContacts(contacts.filter((contact) => contact._id !== id));
            }
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const method = currentContact._id ? "PATCH" : "POST";
        const url = currentContact._id
            ? `/api/contacts/${currentContact._id}`
            : "/api/contacts";

        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentContact),
        });

        if (response.ok) {
            const updatedContact = await response.json();
            setContacts((prev) =>
                currentContact._id
                    ? prev.map((contact) =>
                          contact._id === updatedContact._id ? updatedContact : contact
                      )
                    : [...prev, updatedContact]
            );
            setShowPopup(false);
        }
    };

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
                        onClick={() => handleEditContact(row)}
                        style={{
                            backgroundColor: "#1aac83",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 10px",
                            cursor: "pointer",
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteContact(row._id)}
                        style={{
                            backgroundColor: "#d9534f",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 10px",
                            cursor: "pointer",
                        }}
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ]

    return (
        <div>
            <h1>Contacts</h1>
            <button
    onClick={handleAddContact}
    style={{
        display: "inline-block",
        marginBottom: "20px",
        padding: "12px 20px",
        backgroundColor: "#007BFF", 
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px", 
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
        transition: "all 0.3s ease", 
    }}
    onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#0056b3"; 
        e.target.style.transform = "scale(1.05)"; 
    }}
    onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#007BFF"; 
        e.target.style.transform = "scale(1)"; 
    }}
>
    Add New Contact
</button>
            <DataTable title="Contacts" columns={columns} data={contacts} pagination />
            {showPopup && (
                <ContactForm
                    contact={currentContact}
                    setContact={setCurrentContact}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default Home;