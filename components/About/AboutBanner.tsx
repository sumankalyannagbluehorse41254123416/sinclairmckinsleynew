export default function AboutBanner() {
  return (
    <div
      className="about"
      style={{
        backgroundImage:
          "url(/images/about.jpeg)",
        height: "650px",
        backgroundSize: "cover",
        marginBottom: "32px",
      }}
    >
      <div className="container">
        <div className="about_text">
          <h1>About Us</h1>
          <p>Sinclair McKinsley Ltd - Nurturing Growth, Ensuring Success</p>
        </div>
      </div>
    </div>
  );
}
