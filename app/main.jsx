var React = require("react");
var ReactDom = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolStore = require("./stores/schoolsStore");

var _schools = schoolStore.getSchools();
schoolStore.onChange(function(schools){
  _schools = schools;
  render();
})

function render(){
  ReactDom.render(<SchoolsList schools={_schools}/>, document.getElementById("container"));
}
render();
