# React SaaS Template
Remains of a SaaS business I once tried to build. Now transformed into a template for building an SaaS/admin application using React + Material-UI.

[**Check out the demo**](https://reactsaastemplate.com)

![Node.js CI](https://github.com/dunky11/react-saas-template/workflows/Node.js%20CI/badge.svg)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dunky11/react-saas-template)](https://dependabot.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[<img src="/.github/gifs/showcase.gif">](https://reactsaastemplate.com "Go to demo website")


## Getting Started

### Prerequisites

#### Node.js 12+ (versions below could work, but are not tested)

* Linux:

   ```
   sudo apt install nodejs
   ```

* Windows or macOS:

   https://nodejs.org/en/

### Installing

1. Clone the repository

   ```
   git clone https://github.com/dunky11/react-saas-template
   ```
2. Install dependencies, this can take a minute

   ```
   cd react-saas-template
   npm install
   ```
3. Start the local server

   ```
   npm start
   ```

Your browser should now open and show the app. Otherwise open http://localhost:3000/ in your browser. Editing files will automatically refresh the page.

## Build With

* [Create-React-App](https://github.com/facebook/create-react-app) - Used to bootstrap the development
* [Material-UI](https://github.com/mui-org/material-ui) - Material Design components
* [React-Router](https://github.com/ReactTraining/react-router) - Routing of the app
* [Pace](https://github.com/HubSpot/pace) - Loading bar at the top
* [Emoji-Mart](https://github.com/missive/emoji-mart) - Picker for the emojis
* [React-Dropzone](https://github.com/react-dropzone/react-dropzone) - File drop component for uploads
* [Recharts](https://github.com/recharts/recharts) - Charting library I used for the statistics
* [Aos](https://github.com/michalsnik/aos) - Animations based on viewport
* [React-Cropper](https://github.com/roadmanfong/react-cropper) - Cropper for the image uploads

## Things im currently working on

- [ ] Improving the reusability of components
- [ ] Adding a "update balance" dialog
- [ ] Improve acessability for screen readers
- [ ] Fix tumblr social icon not working properly
 
## Deployment

If you are happy with the state of your website you can run:

```
npm run build 
```

It will create a folder named build with your compiled project inside. After that copy its content into your webroot and you are ready to go.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/dunky11/react-saas-template/blob/master/LICENSE) file for details.
