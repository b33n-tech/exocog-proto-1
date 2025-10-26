import { useContext } from 'react';
import { StackContext } from '../store';

export default function Stack1Page() {
  const { setCadreTexte } = useContext(StackContext);
  return (
    <div>
      <h2>Stack 1</h2>
      <input
        placeholder="Tape ton texte ici"
        onChange={e => setCadreTexte(e.target.value)}
      />
    </div>
  );
}
