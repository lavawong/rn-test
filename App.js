import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
const getData = () => {
  const data = [];
  for (let index = 0; index < 100; index++) {
    data.push(`Try editing my ${index} 🐯`);
  }
  return data;
};

const Hello = () => {
  const items = getData();
  return (
    <View>
      {items.map((item, index) => (
        <Text style={styles.item} key={index}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [catList] = useState(
    getData().map(txt => {
      return {
        key: txt,
      };
    }),
  );
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setSearchText(text)}
        placeholder="Type herer to translate!"
        defaultValue={searchText}
      />
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={styles.imageNormalSize}
      />
      <Text>{searchText || '你还未输入任何信息'}</Text>
      <ScrollView style={styles.section}>
        <Hello />
      </ScrollView>
      <View style={styles.section}>
        <FlatList
          data={catList}
          renderItem={(item, index) => (
            <Text style={styles.item}>{typeof item}adfadsf</Text>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  imageNormalSize: {
    width: 200,
    height: 200,
  },
  section: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default App;
