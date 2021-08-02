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
  const [items] = useState(getData());
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
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
    getData().map((text, index) => {
      return {
        index,
        text,
      };
    }),
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          onChangeText={text => setSearchText(text)}
          placeholder="Type herer to translate!"
          defaultValue={searchText}
        />
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
          style={styles.imageNormalSize}
        />
      </View>
      <View style={styles.section}>
        <Text>{searchText || '你还未输入任何信息'}</Text>
      </View>
      <ScrollView style={styles.section} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text>ScrollView</Text>
        </View>
        <Hello />
      </ScrollView>
      <View style={styles.section}>
        <Text>FlatList</Text>
        <FlatList
          data={catList}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.item}>{item.text}</Text>
              </View>
            );
          }}
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
    overflow: 'hidden',
  },
  imageNormalSize: {
    width: 200,
    height: 200,
  },
  section: {
    flex: 1,
    paddingTop: 22,
    borderWidth: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default App;
