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
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-700 via-gray-600 to-gray-800/80 p-6">

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
  <h1 className="text-2xl font-bold text-white/90 text-center">Password Generator</h1>

  <input
    type="text"
    readOnly
    placeholder="Generated password"
    className="w-full px-4 py-2 bg-white/6 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/8"
    value={password}
    ref={reference}
  />

  <div className="space-y-3">
    <label className="flex items-center space-x-2 text-white/90">Lenght:{length}</label>
    <input
      type="range"
      min={8}
      max={100}
      value={length}
      onChange={(e) => setlength(e.target.value)}
      className="w-full accent-indigo-400"
    />

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="w-4 h-4 text-indigo-600 bg-white/6 border border-white/10 rounded focus:ring-indigo-500"
        onChange={() => setnumber((prev) => !prev)}
      />
      <span className="text-white/90">Include Numbers</span>
    </label>

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="w-4 h-4 text-indigo-600 bg-white/6 border border-white/10 rounded focus:ring-indigo-500"
        onChange={() => setcharacter((prev) => !prev)}
      />
      <span className="text-white/90">Include Special Characters</span>
    </label>
  </div>

  <button
    className="w-full bg-indigo-500/90 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-600/95 transition duration-200 ease-in-out hover:scale-105"
    onClick={copytoclipboard}
  >
    Copy to Clipboard
  </button>
</div>

      </div>
    </>
  );
}

export default App;
