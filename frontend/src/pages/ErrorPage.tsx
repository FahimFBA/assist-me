import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="wrapper d-flex flex-column justify-between"
      style={{
        marginTop: "80px",
      }}
    >
      <main className="flex-grow-1">
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-6">
                <div className="text-center">
                  <img
                    src="/images/illustrations/error-yellow.svg"
                    alt=""
                    className="img-fluid mb-10"
                  />
                  <h2 className="text-white mb-4">Oops! Page Not Found.</h2>
                  <p className="mb-8">
                    The page you are looking for is not available or has been
                    moved. Try a different page or go to homepage with the
                    button below.
                  </p>
                  <Link to="/" className="btn btn-primary-dark">
                    Go to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
