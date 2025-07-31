import { useState } from 'react'
import type { ReactNode } from 'react'
import { useTheme } from '../../hooks/useTheme'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  MdLightMode,
  MdDarkMode,
  MdExpandLess,
  MdExpandMore
} from 'react-icons/md'
import { PiGearFill } from 'react-icons/pi'

type ThemeOption = {
  id: 'light' | 'dark' | 'system'
  icon: ReactNode
  label: string
}

const themes: ThemeOption[] = [
  { id: 'light', icon: <MdLightMode />, label: 'Light theme' },
  { id: 'dark', icon: <MdDarkMode />, label: 'Dark theme' },
  { id: 'system', icon: <PiGearFill />, label: 'System theme' }
]

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg transition-all">
          {themes.map((t) => (
            <Tooltip.Provider key={t.id}>
              <Tooltip.Root delayDuration={200}>
                <Tooltip.Trigger asChild>
                  <button
                    onClick={() => {
                      setTheme(t.id)
                      setOpen(false)
                    }}
                    className={`p-2 rounded-full text-xl transition-colors ${
                      theme === t.id
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    aria-label={t.label}
                  >
                    {t.icon}
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="left"
                    sideOffset={8}
                    className="px-2 py-1 text-sm rounded bg-gray-800 text-white shadow-lg z-50"
                  >
                    {t.label}
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      )}

      <Tooltip.Provider>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => setOpen(!open)}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all text-xl"
              aria-label="Switch theme"
            >
              {open ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="left"
              sideOffset={8}
              className="px-2 py-1 text-sm rounded bg-gray-800 text-white shadow-lg z-50"
            >
              Switch theme
              <Tooltip.Arrow className="fill-gray-800" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
