import './styles.css';

export default function Button({ onClick, children = 'Buscar' }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
