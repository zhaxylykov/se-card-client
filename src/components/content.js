import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component{
  render(){
    return (
      React.createElement(
      	"div",
      	{ id: "bd" },
      	React.createElement(
      		"div",
      		{ id: "play" },
      		React.createElement(
      			"a",
      			{ href: "#fff" },
      			React.createElement("img", { id: "play_img", src: "images/play.png" })
      		)
      	),
      	React.createElement(
      		"div",
      		{ id: "carousel" },
      		React.createElement("img", { id: "main_img0", src: "images/carousel/b36tHQMV0Jg[1].jpg" }),
      		React.createElement("img", { id: "main_img1", src: "" }),
      		React.createElement("img", { id: "prev_img", src: "images/prev.png", onclick: "image_change(1)" }),
      		React.createElement("img", { id: "next_img", src: "images/next.png", onclick: "image_change(-1)" })
      	)
      )
    );
  }
}

export default Content;
