export default function Sidebar({ currentStack, setCurrentStack }) {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
      <button onClick={() => setCurrentStack("stack1")}>Stack 1</button>
      <button onClick={() => setCurrentStack("stack2")}>Stack 2</button>
    </div>
  );
}
