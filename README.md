# NES0038 O&G html banners
> mrec, leaderboard, half page and mobile html banners. Note to develop and build you must set the banner size.

### $BANNER
1. 300x250 (mrec)
1. 300x600 (half page)
1. 728x90 (leaderboard)
1. 320x50 (mobile)

## Get started
```bash
  npm install
```

## Development
```bash
  BANNER=300x250 npm start
```
> after run the command open the index file located in /dist/$BANNER

## Production
```bash
  BANNER=300x250 npm run build # build specific version
  # or
  npm run build:all # build all banner versions
```
> after run the command open the index file located in /dist/$BANNER

