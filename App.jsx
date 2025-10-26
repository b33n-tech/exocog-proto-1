import { useState } from 'react';
import { StackProvider } from './store';
import Sidebar from './components/Sidebar';
import Stack1Page from './stacks/Stack1/Stack1Page';
import Stack2Page from './stacks/Stack2/Stack2Page';

function App() {
  const [currentStack, setCurrentStack] = useState("stack1");

  return (
    <StackProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar currentStack={currentStack} setCurrentStack={setCurrentStack} />
        <div style={{ flex: 1, padding: "20px" }}>
          {currentStack === "stack1" && <Stack1Page />}
          {currentStack === "stack2" && <Stack2Page />}
        </div>
      </div>
    </StackProvider>
  );
}

export default App;
