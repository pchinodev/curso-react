import gitLogo from '../assets/logo.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

import api from '../services/api';
import { useState } from 'react';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      
      const response = await api.get(`/repos/${currentRepo}`);
      if (response.data.id) {
        setRepos([...repos, response.data]);
        setCurrentRepo('');
      }
    } catch (error) {
      console.error('Erro ao buscar o repositório:', error);
    }
  };

  const handleRemoveRepo = (repoId) => {
    const updatedRepos = repos.filter((repo) => repo.id !== repoId);
    setRepos(updatedRepos);
  }


  return (
    <Container>
      <img src={gitLogo} alt="GitHub Logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      { repos.map((repo) => <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />) }
    </Container>
  );
}

export default App;
