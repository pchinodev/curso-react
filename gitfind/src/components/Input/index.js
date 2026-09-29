import './styles.css';

export default function Input({ value, onChange, onKeyDown }) {
  return (
    <input
      className="input"
      name="usuario"
      placeholder="@usuario"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export { Input };
