/**
 * @fileoverview test
 * @author imink
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

const LIST_API = [
  'includes',
  'map',
]

module.exports.rules = {
  "property-undefined": context => ({
    MemberExpression: (node) => {
      if (node.object.type === 'MemberExpression') {
        const property = node.property.name
        // print property in yellow
        // some exceptions this.props || this.state
        if (node.object.object.type === 'ThisExpression' 
          && (node.object.property.name === 'props' || node.object.property.name === 'state')
        ) {
          return
        }
        context.report(node, 'Need to check undefined in case of Cannot read property ' + '\x1b[33m' + property + '\x1b[0m of undefined');
      }
    },
    CallExpression: (node) => {
      if (node.callee.type === 'MemberExpression') {
        if (node.callee.property.name) {
          const apiName = node.callee.property.name
          if (LIST_API.indexOf(apiName) > -1) {
            context.report(node, 'Need to check callee:' + apiName);
          }
        }
      }
    }
  }),
  "safely-if-check": context => ({
    IfStatement: (node) => {
      if (node.test && node.test.left && node.test.left.type && node.test.operator && node.test.right && node.test.right.type) {
        if (node.test.left.type === 'BinaryExpression' && node.test.operator === '||' && node.test.right.type === 'Identifier') {
          context.report(node, 'recheck if statement');
        }
      }
    }
  }),
}

// import processors
module.exports.processors = {

  // add your processors here
};

