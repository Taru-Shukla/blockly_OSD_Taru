/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for variable blocks.
 */

// Former goog.module ID: Blockly.JavaScript.variables

import {Order} from './javascript_generator.js';


export function variables_get(block, generator) {
  // Variable getter.
  const code = generator.getVariableName(block.getFieldValue('VAR'));
  return [code, Order.ATOMIC];
};

export function variables_set(block, generator) {
  // Variable setter.
  const argument0 = generator.valueToCode(
                        block, 'VALUE', Order.ASSIGNMENT) || '0';
  const varName = generator.getVariableName(block.getFieldValue('VAR'));
  return varName + ' = ' + argument0 + ';\n';
};
