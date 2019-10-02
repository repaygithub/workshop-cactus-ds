# More Cactus Web

First, we have made some quick organizational changes to the code and added a router. `App` has been moved to `src/components/App.jsx`, the content has been moved to `src/pages/Home.jsx`, and we've brought in and added a router from `@reach/router`.

We're going to now talk about everything else that's _not_ a form element.

## `<Grid />`

The `Grid` is a way to render columns of items which naturally fall into rows as you add more. It uses the new CSS Grid specification, but then provides a fallback for IE that is not quite perfect, but good enough.

We are going to render all the available icons inside `@repay/cactus-icons`.

1. Let's start by creating a new page and we're going to call it `Icons.jsx` in `src/pages/`.

2. We'll add a title of just "Icons" in an h1.

3. We will add a link into the navigation in `App`. We will render a `Flex` and use the `Link` component provided by `@reach/router`.

> You will see console warning for "alignItems" and "flexWrap" not being valid DOM attributes due to a nuance of Styled Components. We can get around that by ensuring we only pass "children", "className", and "to" properties to the `Link`.

4. Now back to the Icons page, let's first render a static grid of content to see how it looks. ([Grid Documentation](https://repaygithub.github.io/cactus/components/grid/))

```jsx
<Grid>
  <Grid.Item tiny={6} small={3} medium={2}>
    Item 1
  </Grid.Item>
  {/* 5 more */}
</Grid>
```

5. We will now render the icons as a grid in the same fashion along with some styling.

## `@repay/cactus-icons`

We have a custom icon library built from SVGs which are exported as React components.

They are broken up into categories of name and purpose and ideally they are strictly followed, but there are a few cross-overs like the X or check.

1. Icons use the current font-color and can have the color set directly on them.

2. Icons have built in sizes of tiny=8, small=16, medium=24 (default), and large=40.

#### [Cactus Icons documentation](https://repaygithub.github.io/cactus/design-system/icons/)

## Clean-up

To start the next step, let's stash our changes so we all start at the same place and checkout the next branch.

```bash
git stash save "cactus grid and icons"
git checkout step-2
```

### Next: [Cactus Fields](./03-cactus-fields.md)
