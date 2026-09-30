import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
      <h1>Nome do Repositório</h1>
      <p>Descrição do repositório</p>
      <a href="#">Acessar repositório</a><br />
      <a href="#" className="remover">Remover</a>
      <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo
