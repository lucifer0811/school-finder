var React = require("react");
var createReactClass = require('create-react-class');
var actions = require("../actions/SchoolActions");

module.exports = createReactClass({
  getInitialState:function(){
    return {
      name:"",
      tagline:""
    }
  },
  cleanData:function(e){
    e.preventDefault();
    e.target.name = "";
    e.target.tagline = "";
  },
  addSchool:function(e){
    e.preventDefault();
    actions.addSchool(this.state);
  },
  handleInputChange:function(e){
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },
  render:function(){
    return(
      <form className="form" onSubmit={this.addSchool}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">School Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="tagline">Tagline:</label>
          <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">Add School</button>
        </div>
      </form>
    )
  }
})
