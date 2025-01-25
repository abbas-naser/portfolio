import "./ImageWithSpinner.css";
import { useState } from "react";
import UploadingSpinner from "../UploadingSpinner/UploadingSpinner";

export default function ImageWithSpinner({ src, alt }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="image-container-with-spinner">
      {loading && (
        <div className="spinner">
          <UploadingSpinner />
        </div>
      )}
      <img
        style={{ visibility: loading ? "hidden" : "visible" }}
        src={src}
        alt={alt}
        // when img loads completely, show it
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
