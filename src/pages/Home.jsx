function Home() {
  return (
    <div>
      <h1 className="mb-4">Welcome</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Fast Development</h5>
            <p>React + Bootstrap makes UI super quick.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Responsive</h5>
            <p>Works on mobile, tablet, desktop.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Scalable</h5>
            <p>Perfect for enterprise apps.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home