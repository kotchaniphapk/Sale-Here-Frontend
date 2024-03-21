# Sale Here - Frontend Developer Interview Question

Objective: A web-based, GraphQL-powered chat client

## Submission details

### Setup frontend

```
git clone git@github.com:kotchaniphapk/Sale-Here-Frontend.git
cd Sale-Here-Frontend
npm install
npm install -g react-scripts
npm start
```

### Setup backend

The backend is set up with Strapi, GraphQL, and Socket.io. This project needs to run in order for the frontend application to work.

```
git clone git@github.com:kotchaniphapk/Sale-Here-Backend.git
cd Sale-Here-Backend
npm install
npm run build
npm run develop
```
**Node v20+ required**

* Navigate to https://localhost:1337/admin to create an admin account
* Navigate to http://localhost:1337/admin/settings/users-permissions/roles/2 and add **Public** permissions to `Message` and `Room`

![strapi instructions](https://media.cleanshot.cloud/media/21421/2WxDKQhD6WrLD0Qe4CYLax0QyiRzVZVdPQkUOnkF.jpeg?Expires=1711046768&Signature=KEe7Zt1z6zaahlBx1fvQRWxeM9DvA4Gb8J2FOv9OYm53Cdq7Biq~jvrhtatJYTtGqtz8MBgcpdU6FygXxT2rOaJyQ6axTuYOkKn5dL87q0m9IauoDucUCyOTLDcr9aTBXUHbH6mDJPBd3vZtmvCgH7-oyoROOPcACVR2qN1E3ZMs8Xa0plIlRJ8GqiCC4mUpYqFAPM~NUAbsqigTWA3R3wynGQNNxhYxh-TF66ou6D0ZDhUdkJ5B8n9Y8AIKWpGjp8yB6oxCfxkDgv8F~ewCaM788JaqMTK4BSq4sg8mTWqV8Q3R58xKqkZcV48tFdmOzBkGdu9NwlQj0Gr2oKpcDA__&Key-Pair-Id=K269JMAT9ZF4GZ)


## Demo video

See the demo video in `screenshots/`

## CSS Format Requirement

Font Family Prompt

##### Container White

    background color #ffffff
    radius 20px
    height 90vh

##### Title

    font size 37px
    color #383838

##### Button

    color #ffffff
    background image radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)

##### Text Button

    color #6f6f6f
    hover color #c41417

##### Input

    height 60px
    color #4e4e4e
    border 3px solid lightgray
    radius 10px
    font size 34px

## Evaluation

- You must strictly adhere to the above CSS format requirement
- Your solution must function in the exact same way as shown in the given demo video
