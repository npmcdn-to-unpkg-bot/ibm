# IBM FED Test

###### Notes

    App runs from **public_html/**

    Your host should rewrite all 404 requests to / or /index.html or the routing will fail if you try to load any URL or refresh the app from outside the root.

    The inner folder structure needs to match the folder structure of your deployment target or URL routing won't work.

---

###### Set Up, Build, & Run

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

##### Docker

Build the image

> docker build -t ibmchallenge


Mount your local repo to the server directory on the VM

> docker run -P -p 80:3000 -v $HOME/htdocs/ibm:/ibmchallenge --name ibmchallenge ibmchallenge

Start and stop the image

> docker start ibmchallenge

> docker


sh into running image to fire grunt commands individually & interact w/ the server etc.

> docker exec -it menus sh


view the ports of the image

> docker port ibmchallenge

view the IP of the VM

> docker-machine ip default
