import { useState, useEffect } from "react";
import { Text } from '@react-navigation/elements';
import { StyleSheet, View, TextInput } from 'react-native';

export function Search() {
	const [searchBoxText, setSearchBoxText] = useState("")
	const [searchTerm, setSearchTerm] = useState("");
	
  	return (
    	<View style={styles.container}>
    		<TextInput value={searchBoxText} onChangeText={setSearchBoxText} onBlur={() => {setSearchTerm(searchBoxText)}} style={styles.inputField} placeholder="Search..."/>
      		<Text>{searchTerm}</Text>
    	</View>
  	);
}

const styles = StyleSheet.create({
	inputField: {
		borderColor: "#fffa",
		borderWidth: 3,
		borderRadius: 8,
		color: "white",
		width: "100%"
		
	},
  	container: {
    	flex: 1,
    	paddingTop: 32,
    	paddingHorizontal: 8,
    	justifyContent: 'start',
    	alignItems: 'center',
    	gap: 10,
  	},
});
