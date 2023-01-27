# nolwenture

**Requirements***
The application listens to an HTTP GET request at port 8123
The application returns an HTML page to any GET request coming in (i.e. “you can ignore path”)
The HTML page has:
A DIV that contains text “click”
A DIV that has class “table”
CSS to layout the div with text to look bit like a button (and to layout data presented later).
JavaScript that will be called when clicking div with text “click”
The JavaScript makes an HTTP POST request to Node.js to request data
The application adds the data to div with class “table” as a single new row. (CSS should layout it to look bit like a table)
The application listens to an HTTP POST request also at port 8123
When receiving request reads a binary file (binary.dat included in the zip)
Parses from the file (Binary format documentation included in the zip)
“Model number”
“Serial number”
Does it support “48-bit Address feature set”
“Total number of user addressable logical sectors”, which should be converted to size of the disk (each sector is 512 bytes).
Returns parsed data in JSON format


***File Structure

index.js
index.html
binary.dat
Dependencies
http (built-in module)
fs (built-in module)


**Getting Started**

***Clone the repository***
git clone https://github.com/yourusername/yourprojectname.git


***Install dependencies***
npm install

***Start the application***
npm start

**How it works**
When the application starts, it sets up a server to listen on port 8123 for both GET and POST requests
When a GET request is made to the server, it sends the contents of the index.html file as the response
The index.html file contains a button with the text "click" and a table with no data. When the button is clicked, a JavaScript function is called that makes a POST request to the server
When the server receives a POST request, it reads the binary.dat file, parses the data, and returns it in JSON format
The JavaScript function that made the POST request receives the JSON data and adds it to the table as a new row
The CSS styles the button and the table to look like a button and a table respectively

***Limitations***
This application is only able to read the binary.dat file and parse data from it. If the file or its format changes, the application will not be able to parse the new data.
The application is only able to handle one POST request at a time. If multiple POST requests are made simultaneously, it may cause errors.


**Future Work**
(what i can do with it)
Add support for multiple file formats
Implement a database to store the parsed data for persistence
Add the ability to handle multiple simultaneous requests
Add the ability to handle different types of requests such as PUT and DELETE.
Add the ability to handle more than one file
Add the ability to handle different file types other than binary
Add more better error handling
Add more more features.


***Thank Nolwenture for the opportunity, am looking forward to working with the team
