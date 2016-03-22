# Menus Web

###### Notes

    App runs from **public_html/**

    The correct path should be **hostname/menus** in all environments or the api lookup will fail

    Your host should rewrite all 404 requests to / or /index.html or the routing will fail if you try to load any URL or refresh the app from outside the root.

    The inner folder structure needs to match the folder structure of your deployment target or URL routing won't work.

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

##### Authenticating CAS

You **CANNOT** authenticate via the proxy.

You **MUST** make a request over _*.csds.purdue.edu_ or _*.hfs.purdue.edu_ in order for the browser to send the necessary CommonLogin cookie.

If you are running from with our subnet you can use your machines domain + the appropriate port.
  > host <- ipaddress ->

You will have to use a VirtualHost when running over a VPN.

You can enter an infinite authentication loop on routes that require authentication such as */favorites* if you fail to pass the CommonLogin cookie correctly.


---

##### Docker

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

> docker-machine ip default
