# Cactus Framework (`@repay/cactus-fwk`)

There are a few additional changes from the previous step: there is now a NotFound / 404 page and link in the navigation, there is a `ScrollManager` to help make routing feel more natural, and we've added a global store to save the UI Config data in.

## ErrorBoundary

We've added a helper class which we think is a simplified error handler API for react components.

1. We will import the `AppRoot` component from `@repay/cactus-fwk` into `App` and put it just inside the `StyleProvider`.

2. We will now create a global error handler and global error view following the [documentation](https://repaygithub.github.io/cactus/framework/api/error-boundary/)

3. It will render the `error.message` in an `<Alert status="error" />` and the `NotFound` page. Then it will render both arguments `toString()` in `pre` just so we can see what they look like.

4. Now we need to cause an error! Let's add a trigger on the Home page that tries to render a component which doesn't exist.

We can also import and use an `<ErrorBoundary />` directly if we have some code we think is prone to errors.

```jsx
import { ErrorBoundary } from '@repay/cactus-fwk'

const ErrorView = ({ error, info }) => <div>{info.componentStack}</div>

const Page = () => <>Some buggy code</>

export default props => (
  <ErrorBoundary errorView={ErrorView}>
    <Page {...props} />
  </ErrorBoundary>
)
```

## Feature Flags

Feature flags are a way to manage enabling any type of feature within an application: they can be merchant configurable features or features which aren't ready for production.

1. Extract the boolean values from the uiConfig store.

```js
const {
  uiConfig: { use_cactus_styles, allow_customer_login }
} = useUIConfig()
```

2. We will put these into a `featureFlags` object and add a `__dev__: process.env.NODE_ENV !== 'production'` as well. Usually, you would not have a single **dev** feature flag but make specific ones for different features.

3. Now we will try to use these values. Change the `global` prop on `StyleProvider` to equal `use_cactus_styles`. Then we will change the `404` link to a "Sign In" link to `/sign-in` and only render it when `allow_customer_login` is truthy.

4. Now this is obvious, we can just use the values directly. But more likely the NavBar is a separate component, so let's move that functionality to `src/components/Navigation.jsx`.

5. Now, in Navigation we will call `useFeatureFlags('allow_customer_login')` to get the features we care about.

## Platform Agnostic

One of the core design principles of the framework was that it should be platform agnostic, i.e. it need to work with both react-dom and react-native. This is why it doesn't actually render any elements itself and doesn't come with a default ErrorView.

## Recap

- Use `ErrorBoundary` components to catch errors and report them to services like Sentry
- Feature flags can be used to turn on and off any features through out an application.

## Clean-up

To start the next step, let's stash our changes so we all start at the same place and checkout the next branch.

```bash
git stash save "cactus fwk"
git checkout step-4
```

### Next: [Cactus Internationalization](./05-cactus-i18n.md)
