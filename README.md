# Hello Nory Team

Below I explain the most relevant points of the project's development.



<!-- I would like to add that I am not finished with all the details but I reached 7 hours of work and I think I have to be fair with the time 😬.  -->



## SASS

In the sass folder, we can find the "main" file and a "base" folder. This last one is where I make the Sass configuration for the project. I have not spent too much time on this but I want to emphasize that a good configuration allows for improving scalability, maintenance, and reusability. I would even go so far as to say that in the Nory project it would be one of the most important points looking into the future❗️. You could even eliminate the dependency on third-party libraries with good use of Sass.

## Data

I have two components that simulate the data request inside a "useEffect". These elements are Home.js and Calendar.js.

In order to be able to realize it, I have created a folder data where I have stored the data. After making the request I pass the information to the children by props that will be in charge of processing the information and rendering it.

##Components

Most of the components are small because they could be reused in other parts of the page, but the Calendar.js component is much bigger. This component is formed by several children because, in my opinion, they should be together because they are all part of a common goal, which is to show the calendar.

## Redux

As I have communicated to Offer and Marcin, I am not the biggest fan of Redux 😅 but I decided to use it. Everything you need is in the Redux folder, the store, actions, and reducers. Here I want to emphasize that I use the react-redux library to incorporate in the Nav, Banner, and Home the hooks "useSelector" and "useDispatch".

## Improvements that I did not make.

* I have not designed the data files well, and sometimes I have had to do some bad things like this to modify the data that I received.

```javascript
  const daysObj = { ...props };
  delete daysObj.title;
  delete daysObj.tag;
  const days = Object.values(daysObj);
```



* Although the prototype is responsive I have missed a problem to fix in the mobile display, take a look (probably would be solved by playing with the position value and width).

* I also think I should have put the days in the week in sticky to be able to see them even if you scroll down.

* And some little  details like icons.

I think that's all 😄

See you.

