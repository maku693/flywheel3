import "./VideoPlayer.css";

export default function VideoPlayer({ src }) {
  return <video className="VideoPlayer" autoPlay muted loop src={src} />;
}
