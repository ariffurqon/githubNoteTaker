var React = require('react-native');

var{
	View,
	Text,
	StyleSheet
} = React;

class Main extends React.Component{
	render(){
		return(
			<View style={styles.mainContainer}>
				<Text>Testing the Router..</Text>	
			</View>
		)
	}
}

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#FF3366'
	},
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#ffff'
	},
});

module.exports = Main;