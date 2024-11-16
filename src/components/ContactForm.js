import React from "react";

const ContactForm = ({ contact, setContact, onSubmit, onCancel }) => {
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    return (
        <div>
            {/* Background Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1000,
                }}
                onClick={onCancel}
            ></div>

            {/* Popup Form */}
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                    zIndex: 1001,
                    width: "400px",
                }}
            >
                <h2 style={{ marginBottom: "20px", color: "#1aac83" }}>
                    {contact?._id ? "Edit Contact" : "Add Contact"}
                </h2>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="FirstName"
                        placeholder="First Name"
                        value={contact?.FirstName || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="text"
                        name="LastName"
                        placeholder="Last Name"
                        value={contact?.LastName || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={contact?.Email || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="text"
                        name="Phone"
                        placeholder="Phone"
                        value={contact?.Phone || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="text"
                        name="Company"
                        placeholder="Company"
                        value={contact?.Company || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Job Title"
                        value={contact?.JobTitle || ""}
                        onChange={handleInputChange}
                        required
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <div style={{ textAlign: "right" }}>
                        <button
                            type="submit"
                            style={{
                                padding: "10px 15px",
                                backgroundColor: "#1aac83",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                marginRight: "10px",
                            }}
                        >
                            {contact?._id ? "Save" : "Add"}
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            style={{
                                padding: "10px 15px",
                                backgroundColor: "gray",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
