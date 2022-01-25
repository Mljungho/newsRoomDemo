import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import axios from "axios";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

const ScreenOne = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    const response = await axios.get(
      "https://yesterdays-news-api.herokuapp.com/api/articles", 
      {params: {id: route.params.id}}
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articleDisplay = articles.map((article) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('two', { id: article.id, })}>

      </TouchableOpacity>

      <View>
        <Text>{route.article.title}</Text>
      </View>
    );
  });
  return (
    <View>
      <Text>Screen One</Text>
      {/* <Button
        title="Press Me!"
        onPress={() => navigation.navigate("two", { foo: "Bar" })}
      /> */}
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({});
