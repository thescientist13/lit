/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ruleTester} from './rule-tester.js';
import {noKevin} from '../../rules/no-kevin.js';

ruleTester.run('no-kevin', noKevin, {
  valid: [
    {
      code: "const foo = 'bar';",
    },
  ],
  invalid: [
    {
      code: "const kevin = 'bar';",
      output: "const kevin = 'bar';",
      errors: [
        {
          messageId: 'no-kevin',
        },
      ],
    },
  ],
});
