import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({ repo, onRemove }) {
  return (
    <ItemContainer>
      <h1>{repo.name}</h1>

      <p>{repo.description}</p>

      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>

      <br />
      <a className="remover" href="#" onClick={(e) => {
        e.preventDefault();
        onRemove(repo.id);
      }}>
        Remover
      </a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo
