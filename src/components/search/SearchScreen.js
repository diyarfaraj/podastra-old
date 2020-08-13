import React, { useState } from "react";
import { Box, Text } from "react-native-design-utility";
import { StyleSheet, TextInput, FlatList, Image, View } from "react-native";
import { theme } from "../../constants/theme.js";
//import api from "../../api/api.js";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const api_url = `https://listen-api.listennotes.com/api/v2/search?q=${term}&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0"`;
  const searchPodcasts = async () => {
    const response = await fetch(api_url, {
      method: "GET",
      headers: { "X-ListenAPI-Key": `keyhere` },
    }).catch((error) => {
      console.error("hehe fel", error);
      setErrorMessage("something went wrongg");
    });
    const data = await response.json();

    //console.log(data.results);
    setResults(data.results);
  };

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" mt="sm" px="sm" my="sm">
        <TextInput
          term={term}
          onChangeText={setTerm}
          style={s.input}
          placeholder="Search podcasts"
          selectionColor={theme.color.purpleDarkest}
          onSubmitEditing={searchPodcasts}
        />
      </Box>

      <FlatList
        data={results}
        keyExtractor={(res) => res.podcast_id}
        renderItem={({ item }) => (
          <Box h={90} dir="row" align="center" px="sm">
            <Box h={70} w={70} bg="green" radius={10} mr={10} />
            <Box>
              <Text bold>{item.title_original}</Text>
              <Text size="xs" color="grey">
                {item.publisher_original}
              </Text>
              <Text size="xs" color="green">
                {total_episodes}
              </Text>
            </Box>
          </Box>
        )}
      />
    </Box>
  );
};

const s = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.md,
  },
  list: {
    minHeight: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  eachResult: {
    height: 90,
    direction: "ltr",
    alignItems: "center",
  },
});

export default SearchScreen;
