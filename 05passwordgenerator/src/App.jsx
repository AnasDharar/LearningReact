import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function pwgen(len, num, char){

}
function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumAllowed] = useState(true);
  const [charallowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const generatePass = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numallowed) str+="1234567890";
    if(charallowed) str+="!@#$.,%^&()+_=";
    for (let i = 0; i < length; i++) {
      const ind = Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(ind);
    }
    setPassword(pass);
  }, [length, numallowed, charallowed]);

  let passwordRef = useRef(null)
  const copypass = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }
  useEffect(()=>{
    generatePass();
  }, [generatePass]);
  // This function is executed twice in development mode, hence,
  // you will be seeing four logs, that happens due to strictmode in main.jsx (it is commented now)
  // console.log(charallowed);
  // console.log(numallowed);
  return (
    <div className='w-screen h-screen flex justify-center bg-yellow-100'>
      <div className=' m-4 py-4 px-8 h-fit w-fit rounded-md bg-white flex flex-col justify-center items-center shadow-2xl border-yellow-600 border-2 font-serif italic'>
          <h3>Password Generator</h3>
          <div className='flex shadow font-mono not-italic my-2'>
            <input 
              type="text" 
              readOnly 
              value={password} 
              placeholder='Password' 
              className='outline-none my-2 shadow-none px-2'
              ref={passwordRef}
              style={{
                width: `${Math.max(password.length * 0.6 + 2, 8)}rem`,
                minWidth: '8rem',
                maxWidth: '20rem'
              }}
            />
            <button onClick={copypass} className='bg-blue-500 px-8 text-white'>Copy</button>
          </div>

          <div className='flex shadow w-full max-w-md font-mono not-italic gap-8 my-4'>
              <div className='flex gap-1 flex-col items-center'>
                <input type="range" min={6} max={25} className='cursor-pointer w-auto grow' onChange={(e)=> setLength(e.target.value)} name='' id=''/>
                <label htmlFor="length">Length: {length}</label>
              </div>

              <div className='flex items-center gap-1'>
                <input type="checkbox" defaultChecked={numallowed} className='cursor-pointer' onChange={()=> setNumAllowed(!numallowed)} name='' id=''/>
                <label htmlFor="number">Numbers</label>
              </div>

              <div className='flex items-center gap-1'>
                <input type="checkbox" defaultChecked={charallowed} className='cursor-pointer' onChange={()=>{setCharAllowed((prev)=>!prev)/* This is diff for callback, helping avoid rare errors*/}} name='' id=''/>
                <label htmlFor="character">Characters</label>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
