import React from 'react';
import { Monitor, MoonStar, Sun } from 'lucide-react';
import { useTheme, type Theme } from '../../contexts/ThemeContext';
import { Button } from './button';
import { SwatchIcon } from '../icons';
import { Menu, MenuItem, MenuPopover, MenuTrigger } from './menu';

export function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <MenuTrigger>
      <Button variant="ghost" size="icon">
        <SwatchIcon className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu onAction={(key) => setTheme(key as Theme)} className="min-w-[8rem]">
          <MenuItem id="light">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </MenuItem>
          <MenuItem id="dark">
            <MoonStar className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </MenuItem>
          <MenuItem id="mild-gray">
            <Monitor className="mr-2 h-4 w-4" />
            <span>Gray</span>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
