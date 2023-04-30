import React from "react";
import { GlobalStyle } from "GlobalStyle";

import SearchApp from "./SearchInfo/SearchApp";
import Section from "./Section";
import PokemonInfoApp from "./PokemonInfo/PokemonInfoApp";
import MaterialAPP from "./MaterialInfo/MaterialAPP";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Section title="Search info">
        <SearchApp />
      </Section>
      <Section title="Pokemon API">
        <PokemonInfoApp />
      </Section>
      <Section title="Material API">
        <MaterialAPP />
      </Section>
    </>
  );
};

export default App;
