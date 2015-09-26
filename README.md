# Fire Channel

> Make hot fire channels

## Current usage:

To set up an Amazon Fire channel for a YouTube user, follow the instructions below:

1. Create an S3 bucket in the "US Standard" region (`us-east-1`) enabled for static website hosting, with `index.html` as the landing page, and configure permissions so that `GetObject` access permissions are allowed to the world. For each user, you will create a separate bucket, so you may want to name it something like `YOUTUBE_USER_NAME-fire-channel`.
2. Create a Google Developer project, enable the YouTube Data API, and create a browser key accepting requests from the hostname associated with your bucket.  If you named your bucket as suggested above, it will be `YOUTUBE_USER_NAME-fire-channel.s3-website-us-east-1.amazonaws.com`.  In general, for static website hosting buckets in `us-east-1`, it will be `BUCKET_NAME.s3-website-us-east-1.amazonaws.com`.
3. Modify `js/init.js` in this directory, replacing the `user` field with the `YOUTUBE_USER_NAME` for whom you're creating the channel, and the `devKey` field with the browser key created in the previous step.
4. Sync the contents of this directory with your S3 bucket, e.g. using the `s3cmd` command line tool: `s3cmd sync . s3://BUCKET_NAME`.
5. Navigate to `BUCKET_NAME.s3-website-us-east-1.amazonaws.com` in your browser.

## Example

This project is currently configured to create a [channel for TheYoungTurks](the-young-turks-fire-channel.s3-website-us-east-1.amazonaws.com). The `devKey` in `js/init.js` will only work for that referer, so it is safe to leak the credential. The left nav is pretty slick, it even has a working Search functionality. Notice the branding ("TYT" logo) in the top right.

## Issues

YouTube ads don't work, and you'll probably want to serve ads from a different source rather than from YouTube anyways.  This will require significantly changing how the underlying code works, including extracting and hosting the YouTube video separately; right now it streams directly from YouTube.

Having to create a browser key for each YouTube user will not scale.  You will want to purchase a domain, set up a single browser key accepting `*.YOUR_DOMAIN` as valid referrers, and then configure DNS and S3 so that `YOUTUBE_USER_NAME.YOUR_DOMAIN` serves the content in whatever bucket you create for that user.  Because buckets will be created dynamically, a pattern similar to Heroku's might be ideal: `YOUTUBE_USER_NAME-fire-channel-RANDOM_GUID`.

## Legal

This project is just a prototype proof of concept, and is a direct copy-past of [this](https://github.com/amzn/web-app-starter-kit-for-fire-tv/tree/a1f2229773ed1cc38ed0333ef530893aed7f1bbb/out/youtube-sections) with an added README and a couple config changes to `js/init.js`.
