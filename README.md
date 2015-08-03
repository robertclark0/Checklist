Checklist App
=============
Checklist is an Angular.js app to create and edit a basic task checklist. The app allows you to create, delete and update tasks and also mark them complete.

Demo
-----
http://embed.plnkr.co/h160187ytEX1rxhp7FpQ/preview

Detail
-------
The application has two major components. First is view routing. The application consists of three views: the list view, the new item view, and the edit item view. The information displayed in the views is generated dynamically by parsing URL data depending on which item was clicked. The second major component is the Factory. Initial checklist data items are stored in the factory, which at runtime is displayed in the list. Each new item or modification accesses, modifies or creates data in the factory. For the purposes of the scope of this project, the data was stored in the factory and not in an external source.

Running the Program
--------------------
The application is designed to run in the current folder configuration. The files must be hosted on a server that is AJAX enabled. It is not necessary to install Angular, as the code uses the Google CDN hosted library. With files hosted, simply call index.html to run the application.

Additional
-----------
The scope of this project was simple to test and implement a front end Angualr.js application, which is why there is not backend storage for tasks. Future features may include such a backend, modification of the list title, or the ability to social share a task list.

References
-----------
The code withing this project originated with me.

Contact
--------
For more information visit [robertclark.io](http://robertclark.io)
