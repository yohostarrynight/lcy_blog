module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "amd": true,
        "node": true,
        "jquery": true,
        "mocha": true
    },
    rules: {
        // eslint default rule
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "comma-dangle": 0,
        "linebreak-style": 0,
        "global-require": 0,
        "react/prop-types": 0,
        "react/destructuring-assignment": 0,
        "consistent-return": 0,
        "no-else-return": 0,
        "no-param-reassign": 0,
        "no-debugger": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/control-has-associated-label": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1
            }
        ],
        "no-console": 0,
        "no-mixed-operators": 0,
        "no-plusplus": 0,
        "no-underscore-dangle": 0,
        "no-unused-expressions": [
            2,
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "object-curly-spacing": 0,
        "object-curly-newline": 0,
        "padded-blocks": 0,
        "prefer-template": 0,
        "function-paren-newline": 0,
        "prefer-destructuring": 0,
        "space-before-function-paren": [
            2,
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "jsx-a11y/anchor-is-valid": 0,
        // 允许只有一个非 default 的 export
        "import/prefer-default-export": 0,
        // export default 模块名称可以不存在
        "import/no-named-as-default": 0,
        // 允许 js 扩展名
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": [
            2,
            2
        ],
        "react/jsx-indent-props": [
            2,
            2
        ],
        "react/jsx-space-before-closing": 0,
        "react/jsx-tag-spacing": 0,
        "react/jsx-props-no-spreading": 0,
        "react/sort-comp": [
            "error",
            {
                "order": [
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "/^render.+$/",
                    "render"
                ]
            }
        ]
    }
};