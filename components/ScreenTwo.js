import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ScreenTwo = ({ navigation, route }) => {
  const[article, setArticle] =useState({}) 
  const fetchArticle = async () => {
    const { data } = await axios.get(
      "https://yesterdays-news-api.herokuapp.com/api/articles",
      { id: route.params.id }
    );
      setArticle(data.article)
  }
  useEffect(() => {
    fetchArticle();
  }, []);

  };
  return (
    <View>
      <Text>Screen Two {article.title}</Text>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  list: {
    height: 20
  }
});
