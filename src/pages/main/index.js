import './index.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axios } from '../../utils/index';
import { Spinner } from '@chakra-ui/react';
import NavBar from '../../components/navbar/index';
export default function Main() {
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getRecipes() {
      const { data } = await axios.get('/recipe-get-all');
      setRecipeList(data.recipes);
      setIsLoading(false);
    }
    getRecipes();
  }, []);

  function redirectToRecipeDetails(id) {
    history.push('/recipe-datails', { mongoId: id });
  }

  function renderRecipeList() {
    return recipeList.map(({ name, description, img, _id }, index) => {
      return (
        <>
          <NavBar />
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
    renderRecipeList()
  ) : (
    <div className="main-box-orders">
      <Spinner size="xl" />
    </div>
  );
}
