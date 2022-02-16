/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { defineSchema } from '@tinacms/cli'

import { heroTemplate } from '../components/blocks/Hero'
import { featuresTemplate } from '../components/blocks/Features'
import { flyingTemplate } from '../components/blocks/Flying'
import { pricingTemplate } from '../components/blocks/Pricing'

export default defineSchema({
  collections: [
    {
      label: 'Pages',
      name: 'page',
      path: 'content/blocksPages',
      fields: [
        {
          type: 'object',
          name: 'seo',
          label: 'Page Information',
          fields: [
            { type: 'string', label: 'Title', name: 'title' },
            {
              type: 'string',
              label: ' Description',
              name: 'description',
              ui: {
                component: 'textarea',
              },
            },
          ],
        },
        {
          label: 'Page Sections',
          name: 'blocks',
          type: 'object',
          list: true,
          ui: {
            visualSelector: true,
          },
          templates: [
            heroTemplate,
            featuresTemplate,
            flyingTemplate,
            pricingTemplate,
          ],
        },
      ],
    },
  ],
})
