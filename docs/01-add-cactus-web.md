# Add Cactus Web

## The `StyleProvider`

First we need to add some basic, global styles to the application, which will also provide the default theme in we don't set one.

1. import `StyleProvider` from `@repay/cactus-web` and render it at the top level of the application. We will also set the prop `global=true`.

2. Now lets add a `<nav />` where we will put our main site navigation. We can have the title of our website be "Cactus Design System"

3. But that's boring so we will add our cactus logo. We will import the svg at `src/assets/cactus-with-fill.svg` directly and it's handled by the bundler. Don't worry about that. Set the imported variable as the src for an image like:

```jsx
import cactusLogo from './assets/cactus-with-fill.svg'

...
<img src={cactusLogo} />
...
```

## The Utility Components

The `Box`, `Flex`, `Text`, and `Span` are simple utility components to make adding styles inline easy, theme based, performant, and readable.

1. This is way larger than we want so we will instead make use of the utility component `<Box />` with the property `as="img"`. This way we can set the width or height to restrict the size.

2. Set the height of the img to 40px

3. A Logo in the top corner is usually a link back to root so let's wrap it in an anchor tag with the href="/"

4. We should make the title text align with the logo so let's make the wrapping anchor tag a `Flex` component from `@repay/cactus-web` and set `alignItems="center"` and `padding={4}`.

5. Let's make the `<nav />` a `Flex` component as well and we can use the special `colors` utility property to set both background color and text color. (set `colors="base"`)

6. Set the color on the `Flex as="a"` to `color="white"`

7. We will also set `justifyContent="start" width="100vw"` to make the nav span the whole width.

8. Now we will use the `Text` component to wrap our text content.

9. We will welcome visitors to our workshop site and add the following content:

```jsx
<Text as="h1" textStyle="h4" fontWeight={400} textAlign="center">
  Welcome to the Cactus Design System Workshop
</Text>
```

10. Now we will add some fake content to our landing page from [Cheese 🧀 Ipsum](http://www.cheeseipsum.co.uk). Copy the contents of [./snippets/cheese-ipsom.txt](./snippets/cheese-ipsom.txt) and paste it below our welcome title.

## Breakpoints

Breakpoints are built into every style property provided by Styled System. If you provide an array to any style property it will be applied incrementally to each breakpoint.

1. Wrap the text content with a new `Box` component. Add `mx="auto"` and `maxWidth="980px"`. Notice how at smaller sizes the content spans to the edges of the screen and it becomes hard to read.

2. Let's make the `maxWidth` property dynamic based on screen width by setting the value to `['92vw', '90vw', '980px']`

## Recap

- We need to render a `StyleProvider` at the top of the component hierarchy.
- We can use the `Box`, `Flex`, and `Text` components to apply styles directly to specific elements without writing custom styles.
- These utility components can be converted to any tag by using the `as` property and providing a string or React component.
- We can use the provided breakpoints of 768px, 1024px, 1200px, and 1440px to update styles based on viewport width.

## Clean-up

To start the next step, let's stash our changes so we all start at the same place and checkout the next branch.

```bash
git stash save "added cactus web"
git checkout step-1
```

### Next: [Cactus Web Grid and Cactus Icons](./02-cactus-web-grid-and-cactus-icons.md)
