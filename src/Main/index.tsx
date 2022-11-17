import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Hearder';
import { Menu } from '../components/Menu';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories></Categories>
        </CategoriesContainer>
        <MenuContainer>
          <Menu></Menu>
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          <Button onPress={() => alert('Novo Pedido')}>Novo Pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
