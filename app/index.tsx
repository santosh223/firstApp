import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useColorScheme  } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const avatarUrl = "https://randomuser.me/api/portraits/men/1.jpg";

const images = [
  { id: "1", uri: "https://picsum.photos/id/1011/300/300" },
  { id: "2", uri: "https://picsum.photos/id/1012/300/300" },
  { id: "3", uri: "https://picsum.photos/id/1013/300/300" },
  { id: "4", uri: "https://picsum.photos/id/1014/300/300" },
  { id: "5", uri: "https://picsum.photos/id/1015/300/300" },
  { id: "6", uri: "https://picsum.photos/id/1016/300/300" },
];

const tabs = ["Followers", "Saved", "Following"];

export default function App() {
  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";

  const [selectedTab] = useState("Saved");

  return (
    <SafeAreaView style={[styles.container, dark ? styles.darkBg : styles.lightBg]}>

      <View style={styles.headerRow}>
        <Icon name="arrow-left" size={22} color={dark ? "#fff" : "#333"} style={{ marginLeft: 4 }} />
        <View style={styles.headerTabs}>
          <Text style={[styles.tabBlur, dark && styles.tabBlurDark]}>Followers</Text>
          <View style={styles.tabCenter}>
            <Text style={[styles.tabActive, dark && styles.tabActiveDark]}>Saved</Text>
            <View style={[styles.dot, dark && styles.dotDark]} />
          </View>
          <Text style={[styles.tabBlur, dark && styles.tabBlurDark]}>Following</Text>
        </View>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>

      <FlatList
        contentContainerStyle={styles.gridContent}
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.gridImage} />
          </View>
        )}
        style={{ flexGrow: 0 }}
      />
      
      <View style={{ flex: 1 }} />
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 12, paddingHorizontal: 0 },
  lightBg: { backgroundColor: "#f8f8f8" },
  darkBg: { backgroundColor: "#171818" },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: 10,
    marginBottom: 12,
  },
  headerTabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  tabBlur: {
    fontSize: 18,
    color: "#C7C7C7",
    marginHorizontal: 16,
  },
  tabBlurDark: {
    color: "#555"
  },
  tabCenter: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  tabActive: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#222",
    letterSpacing: 1,
  },
  tabActiveDark: {
    color: "#fff"
  },
  dot: {
    width: 7, height: 7, borderRadius: 5, backgroundColor: "#222", marginTop: 3
  },
  dotDark: {
    backgroundColor: "#fff"
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
    marginLeft: 10,
  },
  gridContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 16,
  },
  gridRow: {
    gap: 18,
  },
  imageWrapper: {
    flex: 1,
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  bottomNav: {
    position: "absolute",
    left: 0, right: 0, bottom: 0,
    height: 80,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 12
  },
  bottomNavLight: {
    backgroundColor: "#fff",
  },
  bottomNavDark: {
    backgroundColor: "#222",
  },
  navIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  plusWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 28
  },
  plusBtn: {
    width: 54,
    height: 54,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  plusBtnLight: {
    backgroundColor: "#222",
  },
  plusBtnDark: {
    backgroundColor: "#fff",
  }
});
