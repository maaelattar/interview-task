import styles from "./MeetingInfo.module.scss";

type Props = {
  icon: string;
  title: string;
};
export const MeetingInfo = ({ icon, title }: Props) => {
  return (
    <div className={styles.infoWrapper}>
      <img src={icon} />
      <p>{title}</p>
    </div>
  );
};
