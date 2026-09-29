import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ItemList from "../../components/ItemList";
import background from "../../assets/background.png";
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetData = async () => {
    const username = user.trim();
    if (!username) return;

    setLoading(true);
    setError('');

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);

      if (!userResponse.ok) {
        setCurrentUser(null);
        setRepos(null);
        setError('Usuário não encontrado.');
        return;
      }

      const newUser = await userResponse.json();
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const newRepos = await reposResponse.json();
      setRepos(Array.isArray(newRepos) ? newRepos : []);
    } catch {
      setError('Ocorreu um erro ao buscar os dados.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleGetData();
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="Background" className="background" />

        <div className="info">
          <div className="search">
            <Input
              value={user}
              onChange={(event) => setUser(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button onClick={handleGetData}>
              {loading ? 'Buscando...' : 'Buscar'}
            </Button>
          </div>

          {error && <p className="error">{error}</p>}

          {currentUser && (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  alt={currentUser.login}
                  className="profile"
                />
                <div>
                  <h3>{currentUser.name ?? currentUser.login}</h3>
                  <span>@{currentUser.login}</span>
                  {currentUser.bio && <p>{currentUser.bio}</p>}
                </div>
              </div>
              <hr />
            </>
          )}

          {repos && (
            <div>
              <h2 className="repositorio">Repositórios</h2>
              {repos.length > 0 ? (
                repos.map((repo) => (
                  <ItemList
                    key={repo.id}
                    title={repo.name}
                    description={repo.description}
                    url={repo.html_url}
                  />
                ))
              ) : (
                <p className="empty">Este usuário não possui repositórios públicos.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
