import React from "react";
import { Box, Text } from "react-native-design-utility";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const PodcastDetailsScreen = ({ route, navigation }) => {
  const currenPodcast = route.params;
  return (
    <Box f={1}>
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md">
              {currenPodcast.thumbnail && (
                <Box mr={10}>
                  <Image
                    source={{ uri: currenPodcast.thumbnail }}
                    style={s.thumbnail}
                  />
                </Box>
              )}
              <Box style={s.title}>
                <Text size="lg" bold>
                  {currenPodcast.title_original}
                </Text>
                <Text size="sm" color="grey">
                  {currenPodcast.publisher_original}
                </Text>
                <Text color="green" size="sm">
                  Subcribed
                </Text>
              </Box>
            </Box>
            <Box px="sm" mb="md" dir="row" align="center">
              <Box mr={10}>
                <FeatherIcon size={20} name="play" color="green" />
              </Box>
              <Box>
                <Text size="sm">Play</Text>
                <Text size="sm">#300: Last episode</Text>
              </Box>
            </Box>

            <Box mb="md" px="sm">
              <Text bold size="lg">
                Episodes
              </Text>
            </Box>
          </>
        }
        data={[currenPodcast]}
        renderItem={(item) => <Text>{}</Text>}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

const s = StyleSheet.create({
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title: {
    flex: 1,
  },
});
export default PodcastDetailsScreen;
