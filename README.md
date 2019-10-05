# phorest-techtest-mo-fiebiger

### Hello World and Phorest Team!

I would like to talk a bit about my process over the last few days with generating the Phorest Client Search Engine
web application. Overall, there were many thoughts and plans about how I wanted to execute this product. Some of which
came to fruition and others did not. This documents will discuss what my intentions were for the project, my blockers along
the way, what the final product is now, and how this product can improve if I had more time. Finally, I will give a walk
through about how to use the automate unit tests through JSunit.


#### What I Intended

Firstly, the predominant goal was to solve the two issues: search for clients and create vouchers. Additionally, I knew I wanted
to include some automated tests as well. To have a full stack application one must have both a frontend and a backend.
So, I originally wanted to use, *Django*, as my backend framework. I had experiencing using Django before and knew how to create
automated tests from backend functions with *Travis CI*.

Secondly, I intended to use *React* as the frontend framework. This decision was made, because I recently learned that Phorest
uses React, so I started a few tutorials to get the juices flowing. I found these tutorials to be educational and I enjoyed the
robustness and object oriented nature of the framework.

#### Road Blocks

Unfortunately, these two significant intentions were major blockers; mostly, in terms of time. So I decided to stick with what 
I know best which is pure vanilla Javascript with a bit of Ajax to make the GET and POST requests. 

This leads to my second set of blockers. Navigating the Phorest API. Not going to lie, I found it to be pretty wonky and relied
heavily on the internet and my amazing terminal skills. The first step was to get it working correctly with the curl command given. *John Doe*, wasn't working with the curl command. I tested the command out by putting in some common names like *Patrick* and *Clare*. This was were the success lied. 

The third blocker was the Authorization key. This was more tedious for the Voucher POST request then it was for the Client GET request. Also, it took me a very long time to get the voucher curl command working. The key here was very similar to the first situation which was testing different values of client names and ids. Finally I got it working and was able to send the request with AJAX in the Javascript file.

#### Final Product

As a whole, for a small project that lasted just a few days, I feel like I learned a myriad of skills. Mostly, staying calm under stress and still finding ways to solve the problem (even if how I solved it wasn't how I intended to do so in the first  place). 

Additionally, I sharpened some skills that I already had like HTML, Javascript, CSS, and AJAX. However, I added a few new skills to the bucket list. The first was using Bootstrap to style most of the application. Also, I've never done frontend testing and using Node.js is such a great tool.

I hope you like the application, because I sure do. Here is a link to the final product - deployed by Github: https://mofiebiger.github.io/

#### Future Improvements

As I said above, I am proud of the application and that I was able to solve the problem in the time given. However, there are still some aspects that would make this application better for deployment. 

__Backend with Django:__ Overall, having a backend is necessary and generally better then not having one. This is true for a variety of reasons, but mostly for security. The downfall of not being able to create a simple backend was that the API keys and Phorest business data are not secure (I do know this is a test business we are using, but would not fly for customer software). 

__OOP Design:__ The code is broken up into two components based on the GET and POST requests. However, the code itself would be more reusable and maintainable is I broke it up into classes. From what I have here now there could be two classes Client and Voucher. Each class could have its own methods like getClient (which would return the clientId) or setVoucherValue (which would at a price value to the voucher). Food for thought.

__Responsive Design:__ The application is somewhat responsive, because I used Bootstrap. However, there are a few glitches and responsive design is key to connecting with all types of audiences. 

__Docker:__ Something that I've been reading about lately and very interested in is Dockerizing web applications. It would be cool to create a Docker file for the application for all its dependancies. This is useful for customers who need similar apsects to their software. 

#### Testing
