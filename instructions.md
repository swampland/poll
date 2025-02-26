npm install

To deploy to GitHub pages (replace username with github account):
add "homepage": "https://username.github.io/poll" to package.json
npm run deploy

To deploy to Firebase:
remove "homepage": "https://username.github.io/poll" from package.json
npm run build
firebase deploy --only hosting