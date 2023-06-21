'use client'

import sun from 'public/sun.svg'
import moon from 'public/moon.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Sun = () => (
  <Image
    src={sun}
    alt=""
    className="w-3"
  />
)

const Moon = () => (
  <Image
    src={moon}
    alt=""
    className="w-3"
  />
)

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  const callback = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
      <input id="switch-component" type="checkbox" checked={theme === 'dark'} disabled={!mounted} className="peer appearance-none w-8 h-4 absolute bg-rosePearl-800/20 rounded-full cursor-pointer transition-colors duration-300 checked:bg-lavenderHaze-300/30" onChange={callback} />
      <label htmlFor="switch-component" className="bg-rosePearl-100 w-5 h-5 border border-[#e3dfda] rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer peer-checked:bg-theme-dark peer-checked:border-[#2e232e] flex justify-center items-center">
        {(!mounted || theme !== 'dark') ? <Sun /> : <Moon />}
      </label>
    </div>
  )
}

export default ThemeToggle
