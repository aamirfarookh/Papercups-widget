# Papercups Chat Widget Responsiveness Enhancement

This project focuses on enhancing the responsiveness of the Papercups chat widget for usage in different viewport sizes, particularly on mobile devices. Below is the documentation outlining the changes made and instructions on how to deploy the improved widget.

## Changes Made

### Widget Component
- Updated the `Widget` component to dynamically adjust its appearance based on the viewport size.
- Implemented functionality to detect whether the viewport is on a mobile device or not.
- Applied custom styles to ensure optimal display on mobile devices, maximizing viewport space.

### Responsive Design
- Utilized custom css styles and viewport-based units to adapt the chat widget's dimensions and layout for various screen sizes.
- Ensured that the chat widget remains functional and visually appealing across different devices, including smartphones and tablets.

## Deployment Instructions

To deploy the improved Papercups chat widget with responsiveness enhancements, follow these steps:

1. **Clone the Repository**: Clone the repository containing the project files to your local machine.

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies by running the following command: 
```
   npm install
```

3. **Configuration**: Update the `Widget` component with your Papercups API token and inbox ID. You can find these details in your Papercups dashboard or provide them as environment variables. Ensure that the environment variables `PAPERCUPS_TOKEN` and `PAPERCUPS_INBOX` are set with your Papercups API token and inbox ID, respectively.

4. **Build the Project**: Build the project to generate production-ready assets by running: 
```
npm run build
```
5. **Deployment**: Deploy the built files to your hosting environment. Ensure that the necessary routes and configurations are set up to serve the widget files.


## Demo

A live demo of the responsive Papercups chat widget can be accessed [here](https://papercups-inhotel.netlify.app/)