import React from 'react'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div aria-hidden="true" class="themeSwitch">
          <label for="themeToggle">
            <input id="themeToggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div class="themeToggleButton"></div>
          </label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle
