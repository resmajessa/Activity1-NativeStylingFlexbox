import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const DP = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://i.pinimg.com/236x/d0/a8/bd/d0a8bdabb46e8f2b22129f6014a4cf52.jpg',
        }}
        style={styles.pp}
      />
    </View>
  );
};
const Profile = () => {
  const fname = 'Jessa Mae';
  const lname = 'Resma';
  return (
    <View>
      <Text style={styles.profile}>{fname} {lname}</Text>
    </View>
  );
};
const Course = (props) => {
  return (
    <View>
      <Text style={styles.course}>{props.like}</Text>
    </View>
  );
};
const Subject = (props) => {
  return (
    <View>
      <Text style={styles.sub}>{props.subcode}</Text>
    </View>
  );
};

const SubjectDesc = (props) => {
  return (
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  );
};
const Units = (props) => {
  return (
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <DP />
        <Profile />
        <Course like="BS INFORMATION TECHNOLOGY" />
      </View>

      <Text style={styles.subtitle}>My Subjects:</Text>

      <View style={styles.sublist}>
        <Subject subcode="ELEC 2" />
        <View>
          <SubjectDesc subdesc="Web Development/Web Enterprise" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="ELEC 3" />
        <View>
          <SubjectDesc subdesc="Mobile Application" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 311" />
        <View>
          <SubjectDesc subdesc="Software Engineering" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 312" />
        <View>
          <SubjectDesc subdesc="Information and Assurance 2" />
          <Units units="3" />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode="IT 313" />
        <View>
          <SubjectDesc subdesc="Quantitative Methods" />
          <Units units="3" />
        </View>
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  head: {
    backgroundColor: 'black', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 250,
    width: 380,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 60,
    marginBottom: 10,
  },
  pp: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    color: 'lightgray', 
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  course: {
    color: 'white',
    fontSize:12, 
    marginLeft: 20,
  },
  subtitle: {
    marginRight: 248,
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  sublist: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 380,
    backgroundColor: 'lightgray',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  sub: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'brown'
  },
  subdesc: {
    marginLeft: 30,
  },
  units: {
    marginLeft: 30,
  },
  clickhere: {
    marginTop: 15,
    marginLeft: 180,
    fontSize: 16,
    marginBottom: 40,
    color: 'black',
  },
});
