module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
	},
	// Extend existing configuration
	// from ESlint and eslint-plugin-react defaults.
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	// Enable ES6 support.
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"browser": true,
		"node": true
	},
	"rules": {
		// Disable `no-console` rule
		"no-console": 0,
		// Give a warning if identifiers contain underscores
		"no-underscore-dangle": 1,
		// Default to single quotes and raise an error if something
		// else is used
		"quotes": [2, "single"],
		"semi" : [2, "always"]
	},
};