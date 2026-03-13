export default function TopHeader() {
  return (
    <div className="top_header">
      <div className="container">
        <div className="contact_header">
          <ul>
            <li className="mr" style={{ fontSize: "14px" }}>
              <a href="mailto:info@sinclairmckinsley.co.uk">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                info@sinclairmckinsley.co.uk
              </a>
            </li>

            {/* 
            <li className="mr" style={{ fontSize: "14px" }}>
              <a href="mailto:admin@sinclairmckinsley.co.uk">
                <i className="fa fa-envelope-o" aria-hidden="true"></i> 
                admin@sinclairmckinsley.co.uk
              </a>
            </li> 
            */}

            <li style={{ fontSize: "14px" }}>
              <a href="tel:02084278787">
                <i className="fa fa-phone" aria-hidden="true"></i> 0208 427 8787
              </a>
            </li>
          </ul>
        </div>

        <div className="header_social">
          <ul>
            {/*
            <li>
              <a href="javascript:void(0);">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            */}

            <li>
              <a
                href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
