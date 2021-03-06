# Dicey 
Dicey is a clone of Etsy that focuses on selling homebrew content for Dungeons and Dragons and other table-top RPGs.

### Try it out!
[Live heroku link!](https://aa-dicey.herokuapp.com/)

### Important Links
* [Feature List](https://github.com/ShanFalk/Dicey/wiki/MVP-Feature-List)
* [Database Schema](https://github.com/ShanFalk/Dicey/wiki/Database-Schema)
* [Frontend Routes](https://github.com/ShanFalk/Dicey/wiki/Front-End-Routes)
* [Backend Routes](https://github.com/ShanFalk/Dicey/wiki/API-Routes)

### Technologies used
![Python](https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLALCHEMY-800020?style=for-the-badge&logo=sqlalchemy&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<h3>Usage</h3>

<h4>Log in, Sign up, Demo</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177155950-72c6976e-d9d0-460f-91b0-8d54169048bb.gif" width=800>
</p>

<h4>Create Brew</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177157152-053bb171-e086-431e-8050-434154921687.gif" width=800>
</p>

<h4>Update Brew</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177158162-223088ec-19ec-4f11-b426-ab967d22482f.gif" width=800>
</p>

<h4>Delete Brew</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177159026-772ca41c-1a68-4863-a7a1-43721f54b281.gif" width=800>
</p>

<h4>Add to Cart</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177160811-0a746882-f4a5-4667-a81a-b01139d77d16.gif" width=800>
</p>

<h4>Remove from Cart</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177161535-0532e656-ae4b-430d-b79d-26d588563e41.gif" width=800>
</p>

<h4>Checkout</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177162964-4c692c0b-fcfd-48d1-9a81-5e77e5ca5d88.gif" width=800>
</p>

<h4>Download</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177163826-08f56acd-c946-4637-9db6-dc8d8a9c3b82.gif" width=800>
</p>

<h4>Create Review</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177196079-3be68cd4-d2cb-4133-bc36-42390e7950bc.gif" width=800>
</p>

<h4>Edit Review</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177196447-9c877edf-b9ac-49f1-aee6-560bf7cd22c5.gif" width=800>
</p>

<h4>Delete Review</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177197223-31665976-bb89-46f6-8ee9-cfc23a6c0b2c.gif" width=800>
</p>

<h4>Log out</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/177164625-d31638f0-a0df-41c9-8b51-32e6a46ad866.gif" width=800>
</p>




### Installation Instructions
  1. Clone the repository in your terminal with the following command
  `git clone git@github.com:ShanFalk/Dicey.git`
  
  2. Install all packages for the backend: `cd app` and `pipenv install`
  
  3. Open a new terminal for the frontend and install all packages: `cd react-app` and `npm install`
  
  4. Create a new .env file in the root directory of this project, following the conventions of the .env.example file. 
  
  5. Create and configure a PSQL user to match your .env file.
  
  6. Migrate and seed the database in the backend with `flask db migrate`, `flask db upgrade`, `flask seed all`.
  
  7. Run `pipenv shell` then `flask run` in the backend terminal and `npm start` in the frontend terminal. 
  
  7. Navigate your browser to `localhost:3000`

