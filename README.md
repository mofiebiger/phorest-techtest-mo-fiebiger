# phorest-techtest-mo-fiebiger

### Hello World and Phorest Team! :wave:

I would like to talk a bit about my process over the last few days with generating the Phorest Client Search Engine web application. Overall, there were many thoughts and plans about how I wanted to execute this product. Some of which came to fruition and others did not. This document will discuss what my intentions were for the project, my blockers along the way, what the final product is now, and how this product can improve if I had more time.


#### What I Intended

Firstly, the predominant goal was to solve the two issues: search for clients and create vouchers. Additionally, I knew I wanted
to include some automated tests as well. That being said, to have a full stack application one must have both a frontend and a backend. So, I originally wanted to use, *Django*, as my backend framework. I had experiencing using Django before and knew how to create automated tests from backend functions with *Travis CI*.

Secondly, I intended to use *React* as the frontend framework. This decision was made, because I recently learned from Karol and James that Phorest uses React. This is something that has been on my radar for some time now and I wanted to learn more about it. So, I started a few tutorials to get the juices flowing. I found these tutorials to be educational. I also enjoyed learning about the robustness and object oriented nature of the React framework.

Additionally, I wanted to learn a lot and do the best that I could - and to show everyone at Phorest who I am and where I want to go as a developer. I believe this goal was the most important and most successful.

#### Road Blocks

Unfortunately, three of my significant intentions were major blockers (Django, React, Unit-tests); mostly, in terms of time. So, when I realized I was a bit over my head for the time given I decided to stick with what I know best which is pure vanilla Javascript with a bit of Ajax to make the GET and POST requests.

I attempted testing a few different ways. Before I got the backend fully running I authenticated the Github repository with Travis CI and created a foo unit test. Once I realized I wouldn't be able to create a backend, that testing strategy was out the door. I later learned that I was able to run automated tests through Travis with Node.js. This was my second attempt at writing unit tests, but I ran out of time. In my own time, I would like to navigate through testing javascript through the Node.js framework.

This leads to my third set of blockers. Navigating the Phorest API. Not going to lie, I found it to be pretty wonky and relied
heavily on the internet and my amazing terminal skills. The first step was to get the API working correctly with the curl command given. Unfortunately, the given phone number and email address wasn't working with the curl command. I prevailed by testing the command out by putting in some common names like *Patrick* and *Clare*. This was were the success lied.

The last blocker was the Authorization key. This was more tedious for the Voucher POST request then it was for the Client GET request. Also, it took me a very long time to get the voucher curl command working. The key to solving the problem was very similar to the first situation which was testing different values of client names and ids. Finally I got it working and was able to send the request with AJAX in the Javascript file.

#### Final Product

As a whole, for a small project that lasted just a few days, I feel like I learned a myriad of skills. Mostly, staying calm under stress and still finding ways to solve the problem (even if how I solved it wasn't how I intended to do so in the first  place).

Additionally, I sharpened some skills that I already had like HTML, Javascript, CSS, and AJAX. However, I added a few new skills to the bucket list. The first was using Bootstrap to style most of the application. Also, the beginning steps of learning about React and Node.js.

I hope you like the application, because I sure do. Here is a link to the final product - deployed by Github: https://mofiebiger.github.io/

#### Future Improvements

As I said above, I am proud of the application and that I was able to solve the problem in the time given. However, there are still some aspects that would make this application better for deployment.

__Backend with Django:__ Overall, having a backend is necessary and generally better then not having one. This is true for a variety of reasons, but most significantly for security. The downfall of not being able to create a simple backend was that the API keys (authorization key) and Phorest business data are not secure. I'll add, that in this case, this is a simulated business we are using for the project, but of course, this would not fly for customer software and consumer data protection.

__OOP Design:__ The code is broken up into two components based on the GET and POST requests. However, the code itself would be more reusable and maintainable if it was broken up into classes. From what I have now there could be at least two classes, Client and Voucher. Each class could have its own methods like getClient (which would return the clientId) or setVoucherValue (which would add a price value to the voucher). Food for thought.

__Responsive Design:__ The application is somewhat responsive, because I used Bootstrap. However, there are a few glitches and responsive design is key to connecting with all types of audiences with different devices/technologies.

__Docker:__ Something that I've been reading about lately and I am very interested in is Dockerizing web applications. It would be cool to create a Docker file for the application with all of its dependancies. This is useful for customers who need similar aspects to their software.

__Testing:__ Last, but most definitely not least testing, testing, testing. As you have read I attempted testing a few times. I left some of the attempt code in the repository, so you can see where I left off.

#### Send Off

I want to thank everyone at Phorest for the opportunity to make this application and show you my skills. I found it to be very fun and educational. If you have any questions please feel free to send me an email and I'll be happy to discuss the application further. #letsgrow

:purple_heart: Mo
