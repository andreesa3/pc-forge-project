import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section>
      <div className="contact-wrapper wrapper">
        <div className="info-container">
          <h2>Contact</h2>
          <p className="info-contact">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            commodi repellat quaerat architecto molestias ratione assumenda
            asperiores blanditiis enim consectetur.
          </p>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                name="email"
                id="email"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can We Help You?</label>
              <textarea
                required
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <button disabled={loading || submitted}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>
                {loading ? "Loading..." : submitted ? "Done ✓" : "Send"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
