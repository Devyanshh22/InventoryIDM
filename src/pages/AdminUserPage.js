import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminUserPage.css";

const AdminUserPage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onButton1ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onChangePassUserClick = useCallback(() => {
    navigate("/admin-change-password");
  }, [navigate]);

  const onLogoutUser2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-user-page">
      <div className="user-header">
        <div className="header-menu-12">
          <div className="frame96" onClick={onFrameContainerClick}>
            <div className="home2">Home</div>
          </div>
          <div className="frame97">
            <div className="rectangle2" />
            <b className="users2">Users</b>
          </div>
          <div className="frame98" onClick={onFrameContainer2Click}>
            <div className="devices4">Devices</div>
          </div>
        </div>
        <div className="button-12" onClick={onButton1ContainerClick}>
          <div className="logout1">Logout</div>
        </div>
      </div>
      <div className="user-info">
        <b className="devyanshh-gupta">Devyanshh Gupta</b>
        <img className="user-info-child" alt="" src="/line-9.svg" />
        <div className="admin1">Admin</div>
        <img className="user-pic-icon" alt="" src="/user-pic.svg" />
        <div className="change-pass-user" onClick={onChangePassUserClick}>
          <div className="change-password">Change Password</div>
        </div>
        <div className="logout-user-2" onClick={onLogoutUser2Click}>
          <div className="logout1">Logout</div>
        </div>
      </div>
      <div className="users-table">
        <div className="admin-row-01">
          <div className="frame99" />
          <div className="frame100" />
          <div className="frame101" />
          <div className="frame102" />
          <div className="frame103" />
        </div>
        <div className="admin-row-02">
          <div className="frame99" />
          <div className="frame101" />
          <div className="frame100" />
          <div className="frame102" />
          <div className="frame103" />
        </div>
        <div className="admin-row-03">
          <div className="frame99" />
          <div className="frame101" />
          <div className="frame100" />
          <div className="frame102" />
          <div className="frame103" />
        </div>
        <div className="admin-row-04">
          <div className="frame100" />
          <div className="frame101" />
          <div className="frame99" />
          <div className="frame102" />
          <div className="frame103" />
        </div>
        <div className="admin-row-05">
          <div className="frame99" />
          <div className="frame100" />
          <div className="frame102" />
          <div className="frame101" />
          <div className="frame103" />
        </div>
        <div className="admin-row-06">
          <div className="frame102" />
          <div className="frame100" />
          <div className="frame101" />
          <div className="frame99" />
          <div className="frame103" />
        </div>
        <div className="admin-row-07">
          <div className="frame100" />
          <div className="frame101" />
          <div className="frame102" />
          <div className="frame99" />
          <div className="frame103" />
        </div>
        <div className="admin-row-8">
          <div className="frame99" />
          <div className="frame102" />
          <div className="frame101" />
          <div className="frame100" />
          <div className="frame103" />
        </div>
        <div className="admin-row-9">
          <div className="frame102" />
          <div className="frame100" />
          <div className="frame99" />
          <div className="frame101" />
          <div className="frame103" />
        </div>
        <div className="admin-user-table-header">
          <div className="name">
            <div className="name1">Name</div>
          </div>
          <div className="termination">
            <div className="termination-date">Termination Date</div>
          </div>
          <div className="empid">
            <div className="employee-id2">Employee ID</div>
          </div>
          <div className="hire-date">
            <div className="hire-date1">Hire Date</div>
          </div>
          <div className="type2">
            <div className="type3">Type</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserPage;
