# rollenspielsache-www

It's a Svelte app now!

Put a file at `.env.development.local` - you'll need `rollenspielsache-svc` running locally for this to work:

```
API_HOST=localhost
API_PORT=4567
```


```
$ npm install
$ npm run start
```

Use `npm run build` to compile the production bundle.


You can also specify to use the production server at `.env.production.local`:

```
API_HOST=138.197.52.149
API_PORT=9292
```

Use `NODE_ENV=production npm run start` to use these settings instead.