# Expense Tracker
A simple expense tracker that reads data from a Google Sheets document and categorizes the expenses per month and category.

## Installation and setup
Clone the repository and navigate to the project directory.
Install the project dependencies by running:
```sh
npm install
```
Create a .env.local file at the root of the project and fill it with the following information:
```sh
REACT_APP_API_KEY=<YOUR_GOOGLE_API_KEY>
REACT_APP_SPREADSHEET_ID=<YOUR_GOOGLE_SPREADSHEET_ID>
```
Replace <YOUR_GOOGLE_API_KEY> and <YOUR_GOOGLE_SPREADSHEET_ID> with your own API key and spreadsheet ID, respectively. Make sure your Google Sheet document has a sheet for each category with the following structure:
Data	Category	Value		Data	Category	Value		Data	Category	Value
01/01/2022	Food	10.50		...	...	...		...	...	...
02/01/2022	Food	15.20		...	...	...		...	...	...
...	...	...		...	...	...		...	...	...
## Usage
fetchData(sheet: string) => Promise
Fetches the data from the specified sheet in the Google Sheets document and returns it as an array of rows and columns.

listMajor(sheet: string) => Promise
Given a sheet from the Google Sheets document, categorizes the expenses per month and stores the results in a Map.

fetchCategorizedList() => Promise
Fetches and categorizes the data from all the sheets in the Google Sheets document and returns an array of categorized expenses per month.

## License
MIT. See the LICENSE file for more details.