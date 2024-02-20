import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const Upload = () => {
  const navigate = useNavigate();

  const onCrossUploadBoxIconClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onApproveUploadContainerClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onCancelUploadContainerClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  return (
    <div className="upload2">
      <img
        className="cross-upload-box-icon"
        alt=""
        src="/cross-upload-box.svg"
        onClick={onCrossUploadBoxIconClick}
      />
      <div className="approve-upload" onClick={onApproveUploadContainerClick}>
        <div className="upload3">Upload</div>
      </div>
      <div className="cancel-upload" onClick={onCancelUploadContainerClick}>
        <div className="cancel">Cancel</div>
      </div>
      <div className="upload-files">Upload files</div>
      <div className="upload-box">
        <img className="cloud-upload-1" alt="" src="/cloud-upload-1.svg" />
        <div className="supported-format-csv">Supported format: CSV</div>
        <div className="drop-files-here">Drop files here</div>
        <input className="upload-file-invisible" type="file" />
      </div>
    </div>
  );
};

export default Upload;
