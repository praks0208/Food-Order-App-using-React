import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals",requestConfig,[]);

  console.log(loadedMeals);

  if (isLoading) {
    return <p>Fetching Meals...</p>;
  }

  // if(!data){
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
