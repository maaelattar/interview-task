import "./App.scss";
import { MeetingInfo } from "./components";
import { avatars, infos } from "./stubs";

function App() {
  const renderMeetingInfos = () =>
    infos.map((info) => (
      <MeetingInfo key={info.title} icon={info.icon} title={info.title} />
    ));

  const renderAvatars = () =>
    avatars.map((avatar) => (
      <img
        key={avatar.src.substring(8)}
        className="avatar"
        src={avatar.src}
        alt="avatar"
      />
    ));

  return (
    <div className="screen">
      <div className="card-container">
        <h3 className="card-title">Meeting Title</h3>
        <div className="card-body">
          <div className="card-body-left">{renderMeetingInfos()}</div>
          <div className="card-body-right">
            <p className="status">Scheduled</p>
            <div className="avatar-container">
              <button className="join-call-btn">
                <img src="/meeting-icon.png" alt="Join Call" />
                Join Call
              </button>
              {renderAvatars()}
              <div className="avatar avatar-counter">+4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
