# Advanced Concepts

## Custom styling

While the Styled System props can cover a lot of cases, they don't cover everything; but there's an answer for that.

We can import `styled` from Styled Components directly and write CSS-in-JS and use the theme values.

```jsx
// NavLink
import { Link } from '@reach/router'
import styled from 'styled-components'

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: ${p => p.theme.space[4]}px;
`

export default NavLink
```

## Generating a theme

The theme library `@repay/cactus-theme` exports the default theme, but also a function to help generate themes. Currently, it only accepts a hue and you can't customize the error, warning, and success colors; however in the long run you will be able to do this.

```js
// customTheme.js
import { generateTheme } from '@repay/cactus-theme'

export default generateTheme({ primaryHue: 150 })
```

---

![That's all folks](https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif)
