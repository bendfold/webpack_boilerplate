module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		// Disable `no-console` rule
		"no-console": 0,
		// Give a warning if identifiers contain underscores
		"no-underscore-dangle": 1,
		// Default to single quotes and raise an error if something
		// else is used
		"quotes": [2, "single"],
		"semi" : [2, "always"],
		"no-unused-vars": ["error", { 
				"vars": "local", 
				"args": "after-used", 
				"ignoreRestSiblings": false 
			}
		]
	},
};