# Phone Book App (Front end)

This application section concerns the front end of the challenge provided by SOAP Health, as the first step of the hiring process.

The project is divided in the following structure:

- **assets**: Comprises all SVG images that are used by the application and could not be found at Lucide React Icons;
- **components**: Comprises all page components of the application, such as Input fields, Labels, Search Bar, and several others;
- **layouts**: Contains the modal structure for the delete modal;
- **pages**: Contains the CRUD pages of the application;
- **services**: Comprises all methods responsible for establishing back-end connection through API;
- **theme**: Contains the stylesheet of the application;
- **utils**: Contains the form validation function;

The libraries/dependencies used in this project are: styled-components, Tailwindcss, Shadcn/ui, React Hook Form, Zod and React Lucide Icons.

You have to add the `.env` file with the following variable, in order to recognize the backend URL (API).

```
VITE_APP_API_BASE="http://localhost:3000"
```

### Running commands:

```js
npm install
npm run dev
```