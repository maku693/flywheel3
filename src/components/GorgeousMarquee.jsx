import "./GorgeousMarquee.css";

export default function GorgeousMarquee({ children }) {
  return (
    <div className="GorgeousMarquee">
      <div className="GorgeousMarquee__Content">{children}</div>
    </div>
  );
}
