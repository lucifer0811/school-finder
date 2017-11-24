var React = require("react");
var createReactClass = require('create-react-class');
var actions = require("../actions/SchoolActions");

module.exports = createReactClass({
  deleteSchool: function(e){
    e.preventDefault();
    actions.deleteSchool(this.props.info);
  },
  render:function(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.info.name}
          <span className="pull-right text-uppercase delete-button" id="delete_school" onClick={this.deleteSchool}>&times;</span>
        </div>
        <div className="panel-body">{this.props.info.tagline}</div>
      </div>
    )
  }
});
