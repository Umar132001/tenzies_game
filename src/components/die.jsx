export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <button className="die-btn" onClick={props.hold} style={styles}>
      {props.value}
    </button>
  );
}
