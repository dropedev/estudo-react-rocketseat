import './style.css';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Pedro" time="11:11:11" />
      <Card name="Júlio" time="23:11:13" />
    </div>
  );
}
