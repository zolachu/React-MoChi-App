import ProgressBar from "react-bootstrap/ProgressBar";

function Progress() {
  const now = 30;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;
