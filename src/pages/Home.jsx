import React, { useState } from 'react'
import { Text, TextButton, Box } from '@repay/cactus-web'
import { I18nText } from '@repay/cactus-i18n'

const Home = () => {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return <DoesntExist />
  }
  return (
    <>
      <Text as="h1" textStyle="h4" fontWeight={400} textAlign="center">
        <I18nText get="welcome-message" />
      </Text>
      <Box padding={5}>
        <TextButton variant="danger" onClick={() => setBroken(true)}>
          I break things
        </TextButton>
      </Box>
      <Text>
        Croque monsieur cheesecake swiss. Emmental jarlsberg fromage jarlsberg
        hard cheese cheese on toast brie brie. Emmental cheese on toast feta
        mascarpone camembert de normandie cheesy feet cheese slices danish
        fontina. Parmesan fromage fromage frais cheesecake chalk and cheese when
        the cheese comes out everybody's happy manchego cheese triangles. Red
        leicester cut the cheese cheesecake queso pepper jack queso everyone
        loves halloumi. Stilton pecorino roquefort fromage fromage frais danish
        fontina hard cheese fromage. Gouda stilton cheese and biscuits chalk and
        cheese cottage cheese airedale st. agur blue cheese stilton. Paneer
        cheesecake blue castello squirty cheese.
      </Text>
      <Text>
        Airedale cheese slices fromage frais. Mozzarella caerphilly when the
        cheese comes out everybody's happy pecorino roquefort monterey jack
        caerphilly pepper jack. Mozzarella squirty cheese stilton cheeseburger
        cheesecake smelly cheese cauliflower cheese hard cheese. Cut the cheese
        edam brie caerphilly manchego babybel cheesy feet cheesy grin. Gouda
        cheesy feet cheddar stilton pepper jack cheese strings when the cheese
        comes out everybody's happy stilton. Hard cheese the big cheese queso
        blue castello cheese and wine cheese on toast hard cheese the big
        cheese. Cheese triangles taleggio blue castello cheese and biscuits
        airedale cheesy grin red leicester cheese strings. Goat.
      </Text>
      <Text>
        Cheese and biscuits port-salut taleggio. Danish fontina smelly cheese
        cheeseburger cauliflower cheese cheesy grin cauliflower cheese danish
        fontina brie. Cheesecake stinking bishop paneer bavarian bergkase cut
        the cheese cheese slices caerphilly taleggio. Say cheese cheese on toast
        feta st. agur blue cheese pepper jack cheese slices camembert de
        normandie smelly cheese. Parmesan lancashire macaroni cheese cheddar
        lancashire roquefort roquefort lancashire. Cheesecake everyone loves
        croque monsieur dolcelatte croque monsieur cheddar cream cheese
        taleggio. Bocconcini cheesy grin manchego the big cheese jarlsberg
        jarlsberg cheeseburger edam. Mascarpone edam airedale melted cheese
        stilton chalk and cheese.
      </Text>
      <Text>
        Taleggio parmesan cheese strings. Cheese and wine caerphilly macaroni
        cheese cheesy feet babybel bavarian bergkase bocconcini ricotta. Rubber
        cheese cheese and wine everyone loves mascarpone stilton boursin
        dolcelatte everyone loves. Red leicester cheese slices fondue cream
        cheese taleggio stilton hard cheese parmesan. Queso manchego stilton
        caerphilly cheese triangles cheeseburger rubber cheese taleggio.
        Bocconcini jarlsberg red leicester emmental bavarian bergkase red
        leicester manchego.
      </Text>
      <Text>
        Cauliflower cheese emmental pecorino. Say cheese squirty cheese paneer
        mascarpone fromage frais camembert de normandie hard cheese stinking
        bishop. Boursin cheese and wine manchego monterey jack cheddar
        dolcelatte cottage cheese pecorino. Fondue squirty cheese hard cheese
        danish fontina swiss melted cheese chalk and cheese camembert de
        normandie. Port-salut roquefort ricotta fondue cheddar macaroni cheese
        taleggio ricotta. Rubber cheese chalk and cheese red leicester cheese
        slices stinking bishop cheese strings emmental mascarpone. Red leicester
        croque monsieur cow pepper jack cheese and biscuits smelly cheese brie.
      </Text>
    </>
  )
}

export default Home
