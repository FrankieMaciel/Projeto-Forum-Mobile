import { View, Text, TextInput, Pressable } from "react-native";
import { homeStyles } from "../styles/home";
import { SearchTitle } from "../components/Titulo";
import { searchStyles } from "../styles/search";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Search } from 'react-native-feather';
import vars from "../styles/root";

export function SearchScreen() {

  return (
    <View style={homeStyles.searchContainerView}>
      <SearchTitle></SearchTitle>
      <View style={searchStyles.ViewOnTop}>
        <View style={searchStyles.searchArea}>
          <View style={searchStyles.searchIcon}>
            <Search
              stroke={vars.gray}
              fill="#00000000"
              width={20}
              height={20}
            />
          </View>
          <TextInput style={searchStyles.input}></TextInput>
        </View>
        <View style={searchStyles.sillyButtons}>
          <TouchableOpacity style={searchStyles.button}>
            <Text>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={searchStyles.button}>
            <Text>Pessoas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={searchStyles.button}>
            <Text>Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}