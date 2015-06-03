'use strict';

var React = require('react');
var inputActions = require('../../actions/input');

var ReadGuideSectionComponent = React.createClass({


  render: function() {
    var section = this.props.sec;
    console.log('in readguidesection.jsx section:', section);
    var self = this;

    var linkList = section.links.map(function(link, idx){
      console.log('LINKS: ', link);
      /* jshint ignore:start */
     
      return(

        <div>
       <li>{link.title}</li>
       <li>{link.link}</li>

       </div>
        )
       //   Add back VoteComponent to linkList once fixed
       // link.votes = link.votes || 0;
       //  <VoteComponent key={idx} sectionIndex={this.props.index} linkIndex={idx} votes={link.votes}/>
      /* jshint ignore:end */
    });

    return (
      /* jshint ignore:start */
    <div>
      <ul>
        <li>
        <label>Section Title: </label>
        {section.title}
        </li>

        <li>
        <label>Section Description: </label>
        {section.description}
        </li>

       <li> <label>Links: </label></li>
        {linkList}
        
      </ul>
    </div>
    /* jshint ignore:end */
    );
  },

});

module.exports = ReadGuideSectionComponent;
