import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AuthenticationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the Authentication screen</Text>
      <StatusBar style="auto" />
      <Button
      title="Go To Home Screen"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
