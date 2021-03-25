# Front End Test

### Assumptions
For the purposes of this test, I am assuming that:

* This repo should only contain the front end and doesn't need the server dir.
* This is to work as a 'one-off' page. 
* I shouldn't need any packages not already in the package.json.

### Approach
After setting up the environment I first made sure I could connect to the API with Apollo and receive the expected response for the query provided. Next, I created the product page with a mobile-first approach, making sure that the layout was responsive on larger screen sizes. Once working, I filled out the required test for increasing/decreasing the product quantity and made sure the test passed when the +/- buttons are clicked. Finally, I added a test for the add to cart method in which I mock useState to check that, when clicked, the add to cart button passes the expected array of objects. 

### Improvements
In a real-world scenario, I would have used Redux as a central store for the basket as it would allow the contents to be easily accessed from any page. I could also use the basket state to store things like total price to make sure there is only a single source for this data. I would have also broken down the product page into several reusable components so they could be easily tested and included throughout an application. Further testing could also be done to make sure any upper/lower limits on quantity per product are satisfied and that the required information is present on the page. 