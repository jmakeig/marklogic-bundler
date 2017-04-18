'use strict';
import 'babel-polyfill';
import deepEqual from 'deep-equal';
import StackTrace from 'stack-trace';
import format from 'pretty-format';

export default function() {
  return format({ one: 1 });
}
