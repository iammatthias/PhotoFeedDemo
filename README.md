# PhotoStreamDemo

A quick demo of a simple photo stream site built with Vite and Airtable. Images are served and cached on a global CDN using https://wsrv.nl.

## Setup

Copy this Airtable Base: https://airtable.com/shrNLUW1SGpwiQsKY

Remove the demo content and start adding your own.

Clone this repo and run `yarn` to install dependencies.

Update `src/components/feed/index.tsx` with your base ID (line 19) and Airtable access token (line 22).

You can find your base ID in the url for your base: `https://airtable.com/{{app0E2SLEMdJmXPoY}}/tblMfD7VuYgFxzHGb/viwggDjOt7E8yaE3r?blocks=hide`

You can create an access token here: https://airtable.com/create/tokens

## Running the site

Run `yarn dev` to start the dev server.

## Building the site

You can easily host this with Vercel, Netlify, etc. Connect the repo and you should be set.

## Adding content

Use the Airtable form view.

Demo form for the demo base: https://airtable.com/shrfcL1JHrbTCDUb2
