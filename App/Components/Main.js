var React = require('react-native');
var api = require('../Utils/api');

var{
	View,
	Text,
	StyleSheet,
	TextInput, 
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			isloading: false,
			error: false
		}
	}

	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		});
	}

	handleSubmit(){
		//update our indicatorIOS spinner
		this.setState({
			isloading: true
		});
		// console.log('SUBMIT', this.state.username);
		//fetch data from github
		api.getBio(this.state.username)
			.then((res) => {
				if(res.message === 'not found'){
					this.setState({
						error: 'User not found',
						isloading: false
					})
				} else {
					this.props.navigator.push({
						title: res.name || "Select an Option",
						Component: Dashboard,
						passProps: {userInfo: res}
					});
					this.setState({
						isloading: false,
						error: false,
						username: ''
					});
				}
			});
		//reroute to the next passing that github information
	}


	render(){
		return (
		    <View style={styles.mainContainer}>
		        <Text style={styles.title}>
		          Search for a Github User
		        </Text>
		        <TextInput
		          style={styles.searchInput}
		          value={this.state.username}
		          onChange={this.handleChange.bind(this)} />
		        <TouchableHighlight
		          style={styles.button}
		          onPress={this.handleSubmit.bind(this)}
		          underlayColor="white">
		            <Text style={styles.buttonText}>SEARCH</Text>
		        </TouchableHighlight>
			</View>
		);
	}
};

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
	searchInput: {
	    height: 50,
	    padding: 4,
	    marginRight: 5,
	    fontSize: 23,
	    borderWidth: 1,
	    borderColor: 'white',
	    borderRadius: 8,
	    color: 'white'
	  },
	  buttonText: {
	    fontSize: 18,
	    color: '#111',
	    alignSelf: 'center'
	  },
	  button: {
	    height: 45,
	    flexDirection: 'row',
	    backgroundColor: 'white',
	    borderColor: 'white',
	    borderWidth: 1,
	    borderRadius: 8,
	    marginBottom: 10,
	    marginTop: 10,
	    alignSelf: 'stretch',
	    justifyContent: 'center'
	  },


});

module.exports = Main;