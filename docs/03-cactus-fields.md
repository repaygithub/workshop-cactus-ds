# Cactus Fields

The fields follow a standardized pattern for easy update. All require a `name` for the standardized event handlers.

```ts
type FieldOnFocusHandler = (fieldName: string) => void

type FieldOnChangeHandler<ValueType> = (
  fieldName: string,
  fieldValue: ValueType
) => void

type FieldOnBlurHandler<ValueType> = (
  fieldName: string,
  fieldValue?: ValueType
) => void
```

This standardization makes form building incredibly easy out of the box.

1. Create new page, at `src/pages/UIConfig.jsx` with the basic skeleton. We then add it to the routes and navigation.

2. Let's add an `h1` with "UI Configuration" and a form element

3. We will import a `TextInputField` from Cactus and render it with `name="app_name"` and `label="App Name"`. All fields require a label and a name, but they also have other standard properties that are optional.

| prop       | description                                                   |
| ---------- | ------------------------------------------------------------- |
| `id`       | id of the input                                               |
| `disabled` | whether the input is disabled or not                          |
| `value`    | controlled value, different inputs have different value types |
| `onChange` | see above                                                     |
| `onFocus`  | see above                                                     |
| `onBlur`   | see above                                                     |

Most also contain the following props:

| prop      | description                                                   |
| --------- | ------------------------------------------------------------- |
| `error`   | an error message and the field will display in an error state |
| `success` | a success message and state                                   |
| `warning` | a warning message and state                                   |
| `tooltip` | a message about the field which helps inform the user         |

4. We will then add the form handler boilerplate. We will eventually add a `<Form/>` element which can handle these things for us, but since our elements are not a complete set, we provide the ability to handle it manually.

5. Now we can add any number for Fields to expand our form. We will grab some pre-written code from [./snippets/ui-config-fields.md](./snippets/ui-config-fields.txt)

Here's where this is cool. All fields get the same handler, no matter what type. This allows us to build forms _fast_ and with less boilerplate even without the cool auto handling.

## Clean-up

To start the next step, let's stash our changes so we all start at the same place and checkout the next branch.

```bash
git stash save "cactus fields"
git checkout step-3
```

### Next: [Cactus Framework](./04-cactus-framework.md)
