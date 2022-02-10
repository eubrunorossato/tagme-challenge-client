import './index.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axios } from '../../utils/index';
import { Spinner } from '@chakra-ui/react';
import NavBar from '../../components/navbar/index';
export default function Main() {
  const [recipeList, setRecipeList] = useState([]);
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function getRecipes() {
      const { data } = await axios.get('/recipe-get-all');
      setFilteredRecipeList(data.recipes);
      setRecipeList(data.recipes);
      setIsLoading(false);
    }
    getRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipeList(() => {
      return recipeList.filter(({ name }) =>
        name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    });
  }, [searchValue]);

  function redirectToRecipeDetails(id) {
    history.push('/recipe-datails', { mongoId: id });
  }

  function setValue(e) {
    setSearchValue(e.target.value);
  }

  function renderRecipeList() {
    return filteredRecipeList.map(({ name, description, img, _id }, index) => {
      return (
        <>
          <div className="main-box-orders" key={index}>
            <div className="orders-content">
              <div className="recipe-picture-box">
                <img src={`data:image/jpg;base64,${img}`} alt="" />
              </div>
              <div className="recipe-box">
                <div className="recipe-title">
                  <p>{name}</p>
                </div>
                <div className="recipe-description">
                  <p>{description}</p>
                </div>
              </div>
              <div className="status-box">
                <p>Pedido Finalizado</p>
              </div>
              <div className="circles-box">
                <div
                  className="show-recipe"
                  onClick={() => redirectToRecipeDetails(_id)}
                >
                  <p>Ver Receita</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  return !isLoading ? (
    <>
      <NavBar value={searchValue} onChange={setValue} />
      {renderRecipeList()}
    </>
  ) : (
    <div className="main-box-orders">
      <Spinner size="xl" />
    </div>
  );
}
