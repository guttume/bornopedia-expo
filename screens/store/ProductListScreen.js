import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Input,
  Pressable,
  VStack,
} from "native-base";
import { FlatList } from "react-native";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import SettingAltIcon from "../../assets/icons/SettingsAltIcon";
import ProductListDetail from "../../components/ProductListDetail";
import routes from "../../navigation/routes";

const ProductListScreen = ({ route, navigation }) => {
  const PRODUCTS = [
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
  ];

  const renderProduct = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate(routes.PRODUCT_DETAIL, { id: item.id })
      }
    >
      <ProductListDetail
        thumbnailUrl={item.image}
        title={item.title}
        price={item.price}
        reviews={item.rating.rate}
      />
    </Pressable>
  );

  const { id } = route.params;
  return (
    <Box bgColor="white" flex="1" p="4" pb="64">
      <VStack space="4">
        <HStack w="full" alignItems="center" space="4">
          <Input
            flex="1"
            variant="rounded"
            pl="4"
            borderColor="trueGray.700"
            InputRightElement={<SearchIcon size="6" mr="2" />}
            placeholder="Search by pendant name"
          />
          <FilterIcon size="6" />
          <SettingAltIcon size="6" />
        </HStack>
        <AspectRatio ratio={21 / 9}>
          <Image
            alt="banner"
            borderRadius="20"
            source={{
              uri: "https://media.istockphoto.com/photos/sale-written-over-red-christmas-baubles-hanging-over-red-background-picture-id1347276250?b=1&k=20&m=1347276250&s=170667a&w=0&h=VX1gQCJgtsxqjvMeIMHraaIW8-uGlKhJcG4Nn9zKs7g=",
            }}
          />
        </AspectRatio>
        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          numColumns="2"
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Box>
  );
};

export default ProductListScreen;
