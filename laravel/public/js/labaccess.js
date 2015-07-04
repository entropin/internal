var LabAccessTable = React.createClass({
    mixins: [Backbone.React.Component.mixin],

    renderHeader: function (header, i) {
    	return (
    		<th key={i}>{header}</th>
    	);
    },
	
    clickHandler: function(i){
	console.log(this)
	jQuery(this.state.collection[i]).show();
     }
     ,

	renderRow: function (row, i) {
		var expires = moment(row.expires.toJSON()).locale("en").endOf("day").fromNow();
		return (
		<tbody>
	        <tr onClick={this.clickHandler.bind(this,i)} key={i}>
	            <td>{row.key}</td>
	            <td>{row.name}</td>
	            <td>{expires}</td>
	        </tr>
		<tr style={{display:'none'}} className="drawer"><td colspan="3"><input type="text"/></td></tr>
		</tbody>
		);
	},

  render: function () {
    return (
      <div className="uk-width-1-1">
        <h1>{this.state.model.title}</h1>
        <p>{this.state.model.blurb}</p>
        <table className="uk-table uk-table-striped uk-table-hover">
		    <caption>{this.state.model.caption}</caption>
		    <thead>
		        <tr>
		        	{this.state.model.headers.map(this.renderHeader)}
		        </tr>
		    </thead>
		    <tbody>
		    	{this.state.collection.map(this.renderRow)}
		    </tbody>
		</table>
      </div>
    );
  }
});
