import { useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState("8");
  const [password, setpassword] = useState("");
  const [character, setcharacter] = useState(false);
  const [number, setnumber] = useState(false);

  const passwordGenerator = () => {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (number) str += "0123456789"; // corrected digits
  if (character) str += "!@#$%^&*()_+-=[]{}|;:,.~`";

  let pass = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * str.length);
    pass += str[idx];
  }

  setpassword(pass);
};

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number]);


  /* copy function*/
const reference=useRef(null);
  function copytoclipboard(){
      reference.current?.select();
    navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-6">
        {/* Card */}
        <div className="bg-gray-300 shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Password Generator
          </h1>

          {/* Password Display */}
          <input
            type="text"
            readOnly
            placeholder="Generated password"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            ref={reference}
          />

          {/* Options */}

          <div className="space-y-3">
            <label className="flex items-center space-x-2 ">
              Lenght:{length}
            </label>
            <input
              type="range"
              name=""
              id=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                onChange={() => setnumber((prev) => !prev)}
              />
              <span className="text-gray-700">Include Numbers</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                onChange={() => {
                  setcharacter((prev) => !prev);
                }}
              />
              <span className="text-gray-700">Include Special Characters</span>
            </label>
          </div>

          {/* Copy Button */}
          <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out hover:scale-105 hover:opacity-80"
          onClick={copytoclipboard}>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
