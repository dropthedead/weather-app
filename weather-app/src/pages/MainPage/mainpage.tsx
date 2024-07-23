import { CollapsibleList, List, SimpleListItem } from "@rmwc/list"
import { SimpleMenu } from "@rmwc/menu";
import '@rmwc/menu/styles';
import  { useState } from "react";
function MainPage() {
  const [city, setCity] = useState('Москва');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCityChange = (newCity:string):void => {
    setCity(newCity);
    setMenuOpen(false);
  };

  return (
    <>
      <List>
      <CollapsibleList
          handle={
            <SimpleListItem
              text={city}
              metaIcon="chevron_right"
              onClick={() => setMenuOpen(!menuOpen)} 
            />
          }
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <SimpleListItem text="Москва" onClick={() => handleCityChange("Москва")} />
          <SimpleListItem text="Санкт-Петербург" onClick={() => handleCityChange("Санкт-Петербург")} />
          <SimpleListItem text="Ростов-На-Дону" onClick={() => handleCityChange("Ростов-На-Дону")} />
          </CollapsibleList>
      </List>
    </>
  );
}

export default MainPage