import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Public API Documentation</h1>

        <section className="mt-4">
          <h2>API Overview</h2>
          <p>This API provides access to university data in Indonesia, including details such as name, location, established year, website, and accreditation status.</p>
        </section>

        <section className="mt-4">
          <h2>Endpoints</h2>

          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Get All Universities</h3>
              <p><strong>Endpoint:</strong> <code>/api</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Errors:</strong></p>
              <ul>
                <li><strong>500:</strong> Failed to fetch universities</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">Get University by ID</h3>
              <p><strong>Endpoint:</strong> <code>/api/[id]</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>URL Parameters:</strong> <code>id</code> - The ID of the university you want to retrieve.</p>
              <h4>Response Example:</h4>
              <pre>
                <code>
                  {`{
  "id": "1",
  "name": "University of Example",
  "location": "Example City",
  "established": "1900",
  "website": "https://www.example.ac.id",
  "accreditation": "A"
}`}
                </code>
              </pre>
              <p><strong>Errors:</strong></p>
              <ul>
                <li><strong>404:</strong> University not found</li>
                <li><strong>500:</strong> Failed to fetch university</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h2>Authentication</h2>
          <p>This API does not require authentication for accessing public data.</p>
        </section>
      </div>
    </>
  );
}