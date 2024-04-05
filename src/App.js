import { useEffect, useState } from "react";

function App() {
  const [readData, setReadData] = useState();
  const [id, setId] = useState();

  const read = async () => {
    const response = await fetch("http://localhost:8080/Users");
    const data = await response.json();
    setReadData(data);
    console.log(data);
  };

  const create = async () => {
    const response = await fetch("http://localhost:8080/Users", {
      method: "POST",
      body: JSON.stringify({
        id: 6,
        name: "aman",
        country: "india",
        comment: "good",
        tandc: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    // setReadData(data);
    console.log(data);
  };

  const update = async () => {
    const response = await fetch("http://localhost:8080/Users/6", {
      method: "PUT",
      body: JSON.stringify({
        name: "aman kanaujia 007",
        country: "india",
        comment: "good",
        tandc: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // setReadData(data);
    console.log(response);
  };

  const deleteFunction = async () => {
    const response = await fetch("http://localhost:8080/Users/6", {
      method: "DELETE",
    });
    // setReadData(data);
    console.log(response);
  };

  useEffect(() => {
    read();
  }, []);
  return (
    <>
      <div>
        <h1>Read Data</h1>
        <div>
          {readData?.map((data) => {
            return (
              <>
                <p>
                  {data.id}
                  {data.name}
                </p>
              </>
            );
          })}
        </div>
      </div>
      <button onClick={create}>create</button>
      <button onClick={update}>update</button>
      <button onClick={deleteFunction}>delete</button>
    </>
  );
}

export default App;
