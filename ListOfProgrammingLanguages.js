import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const listStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: 15
    },

    item: {
        padding: 10,
        fontSize: 15,
        fontWeight: "bold",
        height: 44
    }
}) 

const LanguagesList = ( {navigation} ) => {

    return(
        <View style={listStyles.container}>
            <FlatList
                data={[
                    {key: 'C'},
                    {key: "C++"},
                    {key: "C#"},
                    {key: "Java"},
                    {key: "JavaScript"},
                    {key: "Swift"},
                    {key: "Objective-C"},
                    {key: "Kotlin"},
                    {key: "Python"},
                    {key: "Haskell"},
                    {key: "Ampl"},
                    {key: "Bash"},
                ]}
                renderItem={({item}) => <Text style={listStyles.item}>{item.key}</Text>}
            />
        </View>
    );
}

// export default function ListOfProgrammingLanguages() {
//     return(
//         <LanguagesList/>
//     );
// }

// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const LanguagesList = ( {navigation} ) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// }

export default LanguagesList;