'use client'

import { Sun, SunHorizon, MoonStars } from '@phosphor-icons/react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2'
    },
    {
      path: '../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic'
    }
  ]
})

interface ThemeOptionProps {
  position: 'first' | 'middle' | 'last';
  value: string;
  ariaLabel: string;
  toolTip: string;
  icon(cls: string): React.ReactNode;
}

const ThemeOption = ({ position, value, ariaLabel, toolTip, icon }: ThemeOptionProps) => {
  let rounding = ''
  let spacing = 'ml-[1px]'
  switch (position) {
    case 'first':
      rounding = 'rounded-l-lg'
      spacing = ''
      break
    case 'last':
      rounding = 'rounded-r-lg'
      break
  }

  const twItemClassName = `
    bg-day-50/30
    data-[state=on]:bg-day-50/80
    dark:bg-night-700/30
    dark:data-[state=on]:bg-night-700/80
  `.trim()
  const twIconClassName = `
    fill-rosePearl-700
    group-data-[state=on]:fill-rosePearl-800
    dark:fill-rosePearl-600
    dark:group-data-[state=on]:fill-rosePearl-300
  `.trim()

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {/* span is a hack: https://github.com/radix-ui/primitives/discussions/560 */}
        <span>
          <ToggleGroup.Item className={`group ${rounding} ${spacing} w-8 h-7 flex items-center justify-center ${twItemClassName}`} value={value} aria-label={ariaLabel}>
            {icon(twIconClassName)}
          </ToggleGroup.Item>
        </span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={`${satoshi.className} tracking-wider bg-rosePearl-700/5 text-rosePearl-800 dark:text-rosePearl-600 rounded-md px-2 py-1 text-xs`} sideOffset={5}>
          {toolTip}
          <Tooltip.Arrow className="fill-rosePearl-700/10" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}


const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <ToggleGroup.Root
      className="shadow-sm inline-flex rounded-[0.53em] bg-day-100/20 dark:bg-night-700/20 p-[1px]"
      type="single"
      disabled={!mounted}
      value={!mounted ? undefined : theme}
      onValueChange={(value) => {
        if (value) setTheme(value)
      }}
      aria-label="Color theme"
    >
      <ThemeOption
        position='first'
        value='system'
        ariaLabel='System theme'
        toolTip='system theme'
        icon={(cls) => <SunHorizon weight={mounted && theme === 'system' ? 'fill' : 'light'} className={cls} />}
      />
      <ThemeOption
        position='middle'
        value='light'
        ariaLabel='Light theme'
        toolTip='light theme'
        icon={(cls) => <Sun weight={mounted && theme === 'light' ? 'fill' : 'light'} className={cls} />}
      />
      <ThemeOption
        position='last'
        value='dark'
        ariaLabel='Dark theme'
        toolTip='dark theme'
        icon={(cls) => <MoonStars weight={mounted && theme === 'dark' ? 'fill' : 'light'} className={cls} />}
      />
    </ToggleGroup.Root>
  )
}

export default ThemeToggle
