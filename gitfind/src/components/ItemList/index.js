import './styles.css';

export default function ItemList({ title, description, url }) {
  return (
    <div className="itemList">
      <a href={url} target="_blank" rel="noreferrer" className="itemList-title">
        {title}
      </a>
      <p className="itemList-description">{description}</p>
    </div>
  );
}

export { ItemList };
