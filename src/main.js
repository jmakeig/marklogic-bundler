'use strict';
import deepEqual from 'deep-equal';
import StackTrace from 'stack-trace';

export default function() {
  return deepEqual({ one: 1 }, { one: 1 });
}
