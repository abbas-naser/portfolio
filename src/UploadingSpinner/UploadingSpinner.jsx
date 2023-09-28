import "./UploadingSpinner.css";
import Spinner from "react-bootstrap/Spinner";
export default function UploadingSpinner() {
  return (
    <div className="uplaoding-spinner-component-container">
      <Spinner
        className="spinner-in-spinner-component"
        animation="border"
        role="status"
        size="lg"
      >
        <span className="visually-hidden">loading...</span>
      </Spinner>
    </div>
  );
}
