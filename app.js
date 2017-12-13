
var GroceryList = (props) => (
	<ul>
		{props.groceries.map(groceries =>
			<GroceryListItem groceries={groceries} />
			)}
	</ul>
);

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		}
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		})
	}

	render() {
		var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
    	<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
    );
	return (
		<li>{this.props.groceries}</li>
	);
	}
};


var App = () => (
	<div>
		<h2>My Grocery List</h2>
		<GroceryList groceries={['Cucumbers', 'Kale', 'cereal', 'oatmeal', 'cha cha beat boi', '!!']} />
	</div>

);

ReactDOM.render(<App />, document.getElementById('app'));
