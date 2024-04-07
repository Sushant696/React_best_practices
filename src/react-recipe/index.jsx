import recipeArray from "./recipes";
function RecipeApp() {
  return (
    <div>
      <h2>hello world</h2>
      {recipeArray.map((p, i) => {
        {
          console.log(
            p,
            i,
            "the data is comming in the console but not printed on the screen why is that so ?? "
          );
        }
        <div key={i}>
          <h1>{p.id}</h1>
          <p>hello {p.id}</p>
          <h2>{p.name}</h2>
          {console.log("hello world")}
        </div>;
      })}
    </div>
  );
}

export default RecipeApp;
// HERE THE ui is being rendered 5 times why is that so also research about why reconcilitaion and rendering mechanism in react js
