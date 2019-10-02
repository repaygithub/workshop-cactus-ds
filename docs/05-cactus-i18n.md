# Cactus Internationalization

I've added the extras necessary to initialize localizations, and I've added a single key for two languages, en-US and en-CA. When an app gets to implementing i18n, Dhalton or I will help with the specifics of setting up the I18nController so we will start with that finished for this exercise.

1. First, we need the to add the `I18nProvider` and give it our controller in `App.jsx`

2. Then we can render a `I18nText` element with `get="welcome-message"` replacing the text that was there. The text will actually stay the same in this case because it is auto-detecting that we want the `en-US` language.

3. But it's generally considered best practice to give users the ability to change what language they see manually: so let's do that and have some fun.

4. First, we'll copy the buttons from [./snippets/lang-buttons.txt](./snippets/lang-buttons.txt) and put them in the `Navigation`

5. We'll create a `lang` state in `App.jsx` and provide the `setLang` function to `Navigation` to be passed on to the buttons.

6. Now we can switch between US and CA english.

7. Here we are only using the `global` section which is a special section that always exists. But we can scope the document into other sections to be loaded once requested.

## Clean-up

To start the next step, let's stash our changes so we all start at the same place and checkout the next branch.

```bash
git stash save "cactus i18n"
git checkout step-5
```

### Next: [Advanced](./06-advanced.md)
