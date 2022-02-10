import { Checkbox, Progress, Button, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { axios } from '../../utils/index';
import { useHistory } from 'react-router-dom';
import Modal from '../../components/modal/index';
import './index.css';

export default function Recipe() {
  const history = useHistory();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkIngredients, setCheckIngredients] = useState(false);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [checkSteps, setCheckSteps] = useState(false);
  const [arraySteps, setArraySteps] = useState([]);
  const [initTime, setInitTime] = useState('');
  const [minutesTaken, setMinutesTaken] = useState(0);
  const [modalText, setModalText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [preparationProgress, setPreparationProgress] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      const { data } = await axios.get('/recipe-get', {
        params: {
          id: history.location.state.mongoId,
        },
      });
      setRecipe(data.recipe);
      setIsLoading(false);
    }
    getRecipes();
  }, []);

  useEffect(() => {
    if (recipe.ingredients) {
      setArrayIngredients(
        recipe.ingredients.map(() => {
          return false;
        })
      );
      setArraySteps(
        recipe.steps.map(() => {
          return false;
        })
      );
    }
  }, [recipe]);

  function checkIngredient(index) {
    setArrayIngredients(intialState => {
      intialState[index] = !intialState[index];
      return intialState;
    });
    const uniqueArray = new Set(arrayIngredients);
    if (uniqueArray.size === 1 && uniqueArray.has(true)) {
      setCheckIngredients(true);
    }
  }

  function calcTimeTaken() {
    const diffMs = Date.now() - initTime;
    setMinutesTaken(() => {
      return Math.round(((diffMs % 86400000) % 3600000) / 60000);
    });
  }

  function calcProgressPercentage() {
    setPreparationProgress(() => {
      const stepsDone = arraySteps.filter(el => el).length;
      return ((stepsDone * 100) / arraySteps.length).toFixed(0);
    });
  }

  function checkStep(index) {
    setArraySteps(intialState => {
      intialState[index] = !intialState[index];
      return intialState;
    });

    calcTimeTaken();

    calcProgressPercentage();

    const uniqueArray = new Set(arraySteps);
    if (uniqueArray.size === 1 && uniqueArray.has(true)) {
      setCheckSteps(true);
    }
  }

  function openModal(text, textButton) {
    setModalText(text);
    setButtonText(textButton);
    setIsModalOpen(true);
  }

  function initPreparation() {
    if (!checkIngredients) {
      openModal(
        'Para iniciar a preparação, certifique-se de que você tem todos os ingredientes selecionados.',
        'Entendi'
      );
    } else {
      setInitTime(Date.now());
    }
  }

  function endPreparation() {
    if (checkSteps) {
      calcProgressPercentage();
      openModal(
        `Prato finalizado com sucesso em ${minutesTaken} minutos.`,
        'Ok'
      );
    } else {
      openModal(
        'Para finalizar a preparação, certifique-se de que você finalizou todos os passos.',
        'Entendi'
      );
    }
  }

  function renderIngredients() {
    return recipe.ingredients.map(({ name, quatity }, index) => {
      return (
        <Checkbox
          colorScheme="green"
          key={index}
          isDisabled={checkIngredients}
          defaultIsChecked={false}
          onChange={() => checkIngredient(index)}
        >
          {`${quatity} ${name}`}
        </Checkbox>
      );
    });
  }

  function renderSteps() {
    return recipe.steps.map(({ id, description }, index) => {
      return (
        <Checkbox
          colorScheme="green"
          key={index}
          isDisabled={initTime === ''}
          defaultIsChecked={false}
          onChange={() => checkStep(index)}
        >
          <p>Passo {id}</p>
          {description}
        </Checkbox>
      );
    });
  }

  function closeModal() {
    setIsModalOpen(false);
    if (checkSteps) {
      history.push('/');
    }
  }

  return (
    <>
      <div className="recipe-img-box">
        <Modal
          closeModal={closeModal}
          modalOpen={isModalOpen}
          text={modalText}
          buttonText={buttonText}
        />
        <img src={`data:image/jpg;base64,${recipe.img}`} alt="" />
        <div className="details-box">
          <div className="content-box">
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>
      <div className="ingredients-box">
        <p>Ingredientes</p>
        {!isLoading ? (
          renderIngredients()
        ) : (
          <div className="loading">
            <Spinner size="xl" />
          </div>
        )}
      </div>
      <div className="steps-box">
        <h1>Modo de Preparo</h1>
        <div className="steps">
          {!isLoading ? (
            renderSteps()
          ) : (
            <div className="loading">
              <Spinner size="xl" />
            </div>
          )}
        </div>
      </div>
      <div className="footer-box">
        <div className="progress-box">
          <div>
            <p>
              Status <span>{preparationProgress}%</span> pronto e {minutesTaken}{' '}
              {minutesTaken === 1 ? 'minuto' : 'minutos'} utilizados
            </p>
            <Progress
              value={preparationProgress}
              colorScheme={checkSteps ? 'green' : 'orange'}
            />
          </div>
          <Button
            style={
              checkSteps
                ? { backgroundColor: 'green', color: 'white' }
                : { backgroundColor: 'orange', color: 'white' }
            }
            onClick={() => {
              if (initTime === '') {
                initPreparation();
              } else {
                endPreparation();
              }
            }}
          >
            {initTime !== '' ? 'Finalizar' : 'Iniciar Preparação'}
          </Button>
        </div>
      </div>
    </>
  );
}
