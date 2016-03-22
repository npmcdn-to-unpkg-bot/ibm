# IBM FED Test

###### Notes

    App runs from **public_html/**

    Your host should rewrite all 404 requests to / or /index.html or the routing will fail if you try to load any URL or refresh the app from outside the root.

    The inner folder structure needs to match the folder structure of your deployment target or URL routing won't work.

---


##### API Notes
  > API KEY: 679e25f8cb85b7299cec2734962044ac
  > USERID: 35067687@N04
  > URL: https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=679e25f8cb85b7299cec2734962044ac&user_id=35067687@N04&format=json&nojsoncallback=1

flickr.people.getPublicPhotos



Photosets
https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=679e25f8cb85b7299cec2734962044ac&user_id=35067687@N04&format=json&nojsoncallback=1

https://www.flickr.com/services/api/flickr.photosets.getInfo.html



### Search
https://www.flickr.com/services/api/flickr.photos.search.html




https://www.flickr.com/services/api/flickr.photos.getSizes.html

https://www.flickr.com/services/api/flickr.galleries.getListForPhoto.html
flickr.galleries.getListForPhoto
Return the list of galleries to which a photo has been added. Galleries are returned sorted by date which the photo was added to the gallery.



### Sort By

Uploaded

Date Taken


### Filters
Latest
https://www.flickr.com/services/api/flickr.photos.getRecent.html

Popular
https://www.flickr.com/services/api/flickr.stats.getPopularPhotos.html

Tags
https://www.flickr.com/services/api/flickr.tags.getListUser.html
https://api.flickr.com/services/rest/?method=flickr.tags.getListUser&api_key=679e25f8cb85b7299cec2734962044ac&user_id=35067687@N04&format=json&nojsoncallback=1


https://www.flickr.com/services/api/flickr.photos.getInfo.html

---

###### Set Up & Run

> svn checkout https://projects.itas.purdue.edu/repos/UIFramework/tags/1.1.01/common assets/common

> npm update

> grunt build

> grunt

---

###### Building for Production

> grunt build --prod

App is built to **public_html/** using deploy values, minification, and concatenation, mangling etc.

You may need to re-run **grunt build** before you can continue testing.

You **DO NOT** want to deploy the app in this state, this is just a quick way of testing production builds in your local environments and is a step in the deployment build process.  Without cachebusting correctly an end user could potentially load partial and incompatible versions of the app and discover some very strange runtime errors all depending on individual browser caches.

---

###### Building for Deployment

> grunt deploy --prod

Same as a PROD build except files are copied to **deploy/** and cacheBust-ed

Every build/rebuild will have unique hash signatures

You may need to re-run **grunt build** before you can continue testing.


---

<!-- ##### Docker

Build the image

> docker build -t menus


Mount your local repo to the server directory on the VM

> docker run -P -p 80:3000 -v $HOME/htdocs/menus:/menus --name menus menus

Start and stop the image

> docker start menus

> docker


sh into running image to fire grunt commands individually / interact w/ the server etc.

> docker exec -it menus sh


view the ports of the image

> docker port menus

view the IP of the VM

> docker-machine ip default -->
