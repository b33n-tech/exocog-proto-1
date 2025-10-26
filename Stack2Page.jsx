import { useContext } from 'react';
import { StackContext } from '../store';

export default function Stack2Page() {
  const { cadreTexte } = useContext(StackContext);
  return (
    <div>
      <h2>Stack 2</h2>
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        {cadreTexte || "Le texte de Stack1 apparaîtra ici"}
      </div>
    </div>
  );
}
