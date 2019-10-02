import React, { useState, useCallback } from 'react'
import {
  Box,
  Button,
  Flex,
  RadioButtonField,
  Text,
  TextInputField,
  TextAreaField,
  ToggleField,
  CheckBoxField
} from '@repay/cactus-web'

function getDefaultValues() {
  return {
    app_name: 'Cactus Design System',
    terms_1: '',
    terms_2: '',
    terms_3: '',
    terms_4: '',
    select_color: 'default',
    use_cactus_styles: true,
    allow_customer_login: false
  }
}

export const UIConfigPage = () => {
  const [values, setValues] = useState(getDefaultValues)
  const handleChange = useCallback(
    (name, value) => {
      setValues(state => ({ ...state, [name]: value }))
    },
    [setValues]
  )
  return (
    <>
      <Text as="h1">UI Configuration</Text>
      <Box
        as="form"
        marginBottom={6}
        onSubmit={event => event.preventDefault()}
      >
        <TextInputField
          name="app_name"
          label="App Name"
          value={values.app_name}
          onChange={handleChange}
        />
        <Flex flexDirection="column" my={3} role="group">
          <Text as="h3">Theme Color</Text>
          <RadioButtonField
            name="select_color"
            value="default"
            label="Default"
            onChange={handleChange}
            checked={values.select_color === 'default'}
          />
          <RadioButtonField
            name="select_color"
            value="yellow"
            label="Yellow"
            onChange={handleChange}
            checked={values.select_color === 'yellow'}
          />
          <RadioButtonField
            name="select_color"
            value="pink"
            label="Pink"
            onChange={handleChange}
            checked={values.select_color === 'pink'}
          />
        </Flex>
        <ToggleField
          name="allow_customer_login"
          label="Allow Customer Login"
          onChange={handleChange}
          value={values.allow_customer_login}
          my={4}
        />
        <CheckBoxField
          name="use_cactus_styles"
          label="Use Cactus Global Styles"
          my={4}
          checked={values.use_cactus_styles}
          onChange={handleChange}
        />
        <div role="group" aria-labelledby="terms-and-conditions-fields">
          <Text as="h3" id="terms-and-conditions-fields">
            Terms and Conditions Paragraphs
          </Text>
          <TextAreaField
            name="terms_1"
            label="Terms 1"
            value={values.terms_1}
            onChange={handleChange}
          />
          <TextAreaField
            name="terms_2"
            label="Terms 2"
            value={values.terms_2}
            onChange={handleChange}
          />
          <TextAreaField
            name="terms_3"
            label="Terms 3"
            value={values.terms_3}
            onChange={handleChange}
          />
          <TextAreaField
            name="terms_4"
            label="Terms 4"
            value={values.terms_4}
            onChange={handleChange}
          />
        </div>
        <Flex justifyContent="flex-end" my={5}>
          <Button type="submit" variant="action">
            Save
          </Button>
        </Flex>
      </Box>
    </>
  )
}
