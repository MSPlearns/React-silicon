import React from "react";

const ContactUsForm = () => {
  return (
    <form>
      <h3>Get Online Consultation</h3>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="John Doe"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          className="form-control"
          placeholder="email@domain.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="specialist">specialist</label>
        <input
          id="name"
          type="dropdown"
          className="form-control"
          placeholder="Select one"
        />
      </div>

      <input
        className="btn btn-primary shape-rectangular btn-shadow-out"
        id="btn-submit-subscribe"
        type="submit"
        value="Make an appointment"
      />
    </form>
  );
};

export default ContactUsForm;
