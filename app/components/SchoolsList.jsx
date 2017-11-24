var React = require("react");
var createReactClass = require('create-react-class');
var SchoolInfo = require("./SchoolInfo.jsx");
var AddSchool = require("./AddSchool.jsx");

module.exports = createReactClass({
  render:function(){
    return(
      <div className="row">
        <div className="col-md-6">
          <AddSchool />
        </div>
        <div className="col-md-6">
          {
            this.props.schools.map(function(s,index){
              return(
                <SchoolInfo info={s} key={"school"+index} />
              )
            })
          }
        </div>
      </div>
    )
  }
});
