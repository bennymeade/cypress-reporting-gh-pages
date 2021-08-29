/*
 * Copyright 2019 pystol.org - All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author: Carlos Camacho <carloscamachoucv@gmail.com>
 */

var corssproxy = 'https://cors-anywhere.herokuapp.com/';
var badges = [
{
  type: 'text',
	size:{x:2,y:1},
	position:{x:1,y:1},
	title: "Picasso GH Dashboard",
	subtitle: 'CI dashboard status',
	description: 'GitHub actions reports',
	link: 'http://www.bing.com',
	color:'widget-text',
},
{
  type: 'picture',
	size:{x:2,y:1},
	position:{x:3,y:1},
	src:'assets/images/unilever.png',
	color:'widget-logo',
},
{
  type: 'clock',
	size:{x:2,y:1},
	position:{x:5,y:1},
	color:'widget-meter',
},
{
  type: 'badge',
	size:{x:3,y:2},
	position:{x:1,y:2},
  uri: corssproxy + 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/run-cypress-tests.yml/badge.svg',
	title: "Mochawesome report",
	description: 'workflow for report',
	link: 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/run-cypress-tests.yml',
	measure:{x:188,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
	size:{x:3,y:2},
	position:{x:2,y:2},
  uri: corssproxy + 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/slack-notify.yml/badge.svg',
	title: "Cypress slack notify",
	description: 'workflow for notifications',
	link: 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/slack-notify.yml',
	measure:{x:138,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:3,y:2},
 	position:{x:3,y:2},
	uri: corssproxy + 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/post-new-relic.yml/badge.svg',
	title: "Post to New Relic",
	description: 'workflow for New Relic',
	link: 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/post-new-relic.yml',
	measure:{x:125,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:3,y:2},
 	position:{x:4,y:2},
	uri: corssproxy + 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/echo-inputs.yml/badge.svg',
	title: "Echo inputs",
	description: 'workflow for echos',
	link: 'https://github.com/bennymeade/cypress-reporting-gh-pages/actions/workflows/echo-inputs.yml',
	measure:{x:95,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
}
];
