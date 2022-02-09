import './index.css';
import { useEffect, useState } from 'react';
import { axios } from '../../utils/index';
import { Spinner } from '@chakra-ui/react';
export default function Main() {
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRecipes() {
      const { data } = await axios.get('/recipe-get-all');
      console.log('buynda', data);
      setRecipeList(data.recipes);
      setIsLoading(false);
    }
    getRecipes();
  }, []);

  function renderRecipeList() {
    return recipeList.map(({ name, description, img }) => {
      return (
        <div className="main-box-orders">
          <div className="orders-content">
            <div className="recipe-picture-box">
              <img src={`data:image/png;base64,${img}`} alt="" />
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
              <div className="show-recipe">
                <p>Ver Receita</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return !isLoading ? (
    renderRecipeList()
  ) : (
    <div className="main-box-orders">
      <Spinner size="xl" />
    </div>
  );
}
