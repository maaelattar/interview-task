import react from "react";

type Props = {
  icon: string;
  text: string;
};
const MeetingInfo = ({ icon, text }: Props) => {
  return (
    <div id="infoContainer">
      <div style={{ width: 45, height: 45, background: `url${icon}` }} />
      <p>{text}</p>
    </div>
  );
};

export default MeetingInfo;
