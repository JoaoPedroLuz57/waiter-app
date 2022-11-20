import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../Utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  ModalBody,
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  PriceContainer,
} from './styles';

interface ProductModalProps {
  product: Product | null;
  visible: boolean;
  onClose: () => void;
}

export function ProductModal({ product, visible, onClose }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.15.55:3001/uploads/${product?.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text weight="600" size={24}>
            {product.name}
          </Text>
          <Text color="#666666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666666">
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>
                  <Text size={14} color="#666666">
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            ></FlatList>
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666666">Preço</Text>
            <Text weight="600" size={20}>
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>
          <Button
            onPress={() => alert('Adicionado ao pedido')}
          >Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
