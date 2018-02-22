import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
	render() {
		return(
			React.createElement(
				"div",
				{ id: "menu" },
				React.createElement(
					"div",
					{ id: "logo" },
					React.createElement("img", { alt: "", src: "images/logo.png" })
				),
				React.createElement(
					"div",
					{ "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"NEWS"
					)
				),
				React.createElement(
					"div",
					{ "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"CHARACTERS"
					)
				),
				React.createElement(
					"div",
					{ "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"CARDS"
					)
				),
				React.createElement(
					"div",
					{ "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"STORE"
					)
				),
				React.createElement(
					"div",
					{ "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"DOWNLOAD"
					)
				),
				React.createElement(
					"div",
					{ id: "other", "class": "menu_but" },
					React.createElement(
						"a",
						{ href: "" },
						"OTHER"
					),
					React.createElement(
						"div",
						{ id: "dropdown" },
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"OTHER_1"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"OTHER_2"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"OTHER_3"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ id: "account" },
					React.createElement("img", { "class": "features_img", alt: "", src: "images/account.png" }),
					React.createElement(
						"div",
						{ "class": "features_container" },
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"LOGIN"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"CREATE AN ACCOUNT"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ id: "language" },
					React.createElement("img", { "class": "features_img", alt: "", src: "/images/language.png" }),
					React.createElement(
						"div",
						{ "class": "features_container" },
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"English"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"Russian"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"Kazakh"
							)
						),
						React.createElement(
							"div",
							{ "class": "drop_but" },
							React.createElement(
								"a",
								{ href: "" },
								"Other"
							)
						)
					)
				)
			)
		);
	}
}

export default Menu;
