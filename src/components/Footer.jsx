export const Footer = () => {
  return (
    <>
      <footer className="text-muted py-4 bg-dark bg-gradient ">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#" className="link-light">
              Go to
            </a>
          </p>
          <p className="mb-1">
           This page is developed in &copy; React-Bootstrap and Vite.{" "}
          </p>
          <p className="mb-0">
            Hello Ed Bondame
            <a
              href="https://www.linkedin.com/in/ed-bondame/"
              className="link-light"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            y{" "}
            <a
              href="https://gitlab.com/Edbondame"
              target="_blank"
              className="link-light"
            >
              GitLab
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};
