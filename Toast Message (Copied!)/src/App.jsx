import { useState, useCallback, useEffect, useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(true)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
    toast.success("Password copied to clipboard!")
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <Toaster />
      <div className={`${isDarkMode ? "bg-gray-900 text-orange-500" : "bg-white text-black"} w-full min-h-screen flex items-center justify-center px-4`}>
        <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 bg-opacity-90 relative">

          {/* Dark/Light Mode Toggle */}
          <button
            className={`absolute top-4 right-4 text-xs px-2 py-1 rounded ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          <h1 className='text-center text-2xl font-semibold mb-6'>🔐 Password Generator</h1>

          <div className="flex shadow rounded overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 bg-white text-black"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-700 text-white px-4 py-1 shrink-0"
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            {/* Length Slider */}
            <div className="flex items-center justify-between">
              <label htmlFor="lengthRange">Length: {length}</label>
              <input
                type="range"
                id="lengthRange"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-1/2"
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            {/* Numbers Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers">Include Numbers</label>
            </div>

            {/* Special Characters Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="characters"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characters">Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
