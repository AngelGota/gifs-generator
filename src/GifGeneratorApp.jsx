import { useState } from "react";

export const GifGeneratorApp = () => {
  const [categories, setCategories] = useState([
    "Mr Robot",
    "Los Simpson",
    "Robocop",
  ]);

  const onAddCategory = () => {
    return setCategories([...categories, value]);
  };

  const [value, setValue] = useState();

  const onChangeValue = (e) => {
    return setValue(e.target.value);
  };

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifGeneratorApp</h1>
      {/* input */}

      <input type="text" name="text" onChange={onChangeValue} />
      {/* listado de gifs */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* gif item */}
    </>
  );
};

export default GifGeneratorApp;
