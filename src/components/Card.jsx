import { Link } from "react-router-dom";

export default function Card({header, content, footer}) {
  const {headerIcon, headerTitle, headerButton, headerLink} = header;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          {headerIcon}
          {headerTitle}
        </div>
        {/* Hide button if headerButton is null/nothing to display */}
        {headerButton !== null ? (
        <Link className ="card-header-button link" to={headerLink}>
          {headerButton}
        </Link>
        ) : null }
        {/* End Hide button */}
      </div>
      <div className="card-content">
        { content !== null ? content : null }
      </div>
      <div className="card-footer">
        {footer !== null ? footer : null }
      </div>
    </div>
  );
}