import React from 'react'
import { Text, Grid, Flex } from '@repay/cactus-web'
import * as icons from '@repay/cactus-icons'

const iconTuples = Object.entries(icons).filter(
  ([name]) => name !== 'iconSizes'
)

export const IconsPage = () => (
  <>
    <Text as="h1">Icons</Text>
    <Grid>
      {iconTuples.map(([name, Icon]) => (
        <Grid.Item key={name} tiny={6} small={3} medium={2}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={4}
            colors="base"
          >
            <Text textAlign="center" textStyle="small">
              {name}
            </Text>
            <Icon iconSize="large" color="lightContrast" />
          </Flex>
        </Grid.Item>
      ))}
    </Grid>
  </>
)

export default IconsPage
