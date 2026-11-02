# Gen to Gen Foundation Website

## 1. Project Overview

The Gen to Gen Foundation website is a multi-page website developed to introduce the organisation, communicate its purpose and activities, and provide visitors with ways to get involved.

Gen to Gen Foundation is a nonprofit organisation focused on philanthropy, youth empowerment and mentorship. Its work aims to support young people, elderly people and vulnerable communities in South Africa.

The website provides information about the organisation, its programmes and services, and the different ways individuals and organisations can contribute. It also provides dedicated enquiry and contact pages to make communication with the foundation easier.

The website was developed as part of the Web Development: Introduction module. It demonstrates the application of HTML, CSS and JavaScript in building a structured, responsive and user-friendly website.

**Live Website:** https://cheerful-taiyaki-e4b652.netlify.app/

**GitHub Repository:** https://github.com/Tumi7-7/GEN-TO-GEN

---

## 2. Website Objectives

The main objectives of the website are to:

- Introduce Gen to Gen Foundation and communicate its purpose.
- Explain the foundation's focus on philanthropy, youth empowerment and mentorship.
- Provide information about the organisation's community initiatives and programmes.
- Encourage visitors to participate through volunteering, mentorship, sponsorship and donations.
- Make it easier for visitors to submit enquiries and contact the organisation.
- Provide a professional online presence for the foundation.
- Ensure visitors can access the website across desktop computers, tablets and mobile devices.
- Improve the website's functionality, accessibility, search engine visibility and overall user experience.

## 3. Target Audience

The website is intended for individuals and organisations interested in supporting community development and social initiatives.

Its target audience includes:

- Young people seeking mentorship, guidance and empowerment opportunities.
- Individuals interested in volunteering and community development.
- Potential donors and sponsors interested in supporting the foundation.
- Organisations interested in partnerships and sponsorship opportunities.
- Members of the public seeking information about the foundation and its activities.
- Communities that may benefit from the foundation's programmes and initiatives.

---

## 4. Website Pages and Their Purpose

The website consists of five main pages. Each page has a specific purpose and contributes to the overall user experience.

### 4.1 Home Page – index.html

The Home page serves as the main entry point to the website. It introduces Gen to Gen Foundation and communicates the organisation's purpose through a clear heading, introductory content and relevant imagery.

The page highlights the foundation's main areas of focus:

- **Philanthropy:** Supporting communities experiencing challenges such as poverty and limited access to education, healthcare and nutrition.
- **Youth Empowerment:** Supporting young people through opportunities, resources and initiatives that encourage personal development.
- **Mentorship:** Providing young people with guidance, encouragement and knowledge.

The Home page also encourages visitors to become involved through volunteering, supporting mentorship programmes, contributing to community projects and making donations.

### 4.2 About Us Page – about.html

The About Us page provides visitors with further information about Gen to Gen Foundation.

It communicates the organisation's purpose and community-focused approach. The page helps visitors understand why the foundation exists, the communities it aims to support and the importance of its work.

Relevant images are used to support the written information and make the page more engaging.

### 4.3 Services Page – services.html

The Services page explains the foundation's main activities and areas of support.

The content focuses on initiatives such as:

- Philanthropy and community support.
- Youth empowerment.
- Mentorship programmes.
- Soup-kitchen initiatives.
- Community development activities.
- Opportunities for donations and participation.

The page helps visitors understand the types of initiatives associated with the foundation and how they may become involved.

### 4.4 Enquiry Page – enquiry.html

The Enquiry page provides a dedicated space for visitors who want more information about the foundation's programmes and opportunities.

Visitors may use this page to enquire about services, volunteering, mentorship, sponsorship, donations and other relevant activities.

The page is intended to collect the information necessary for the organisation to understand the visitor's enquiry and respond appropriately.

### 4.5 Contact Page – contact.html

The Contact page provides the foundation's contact information and a general communication form.

The published contact information includes:

**Address:** Aloe Place, 588 Greenstone Drive, Johannesburg, South Africa  
**Telephone:** +27 81 553 0841  
**Email:** info@gentogen.co.za

The website also provides a Google Maps location link for visitors who want to view the Johannesburg location.

The contact form is intended for general questions, comments and messages that do not necessarily relate to a specific programme or service.

---

## 5. Technologies Used

The website uses the following web technologies:

### HTML5

HTML5 provides the structure and content of the website. It is used to organise headings, paragraphs, navigation links, images, sections, forms and other page elements.

Semantic HTML elements help make the website easier to understand, maintain and navigate.

### CSS3

CSS3 is used to control the website's appearance and layout. The external stylesheet defines the colours, typography, spacing, navigation, page layout, images, buttons, forms and responsive behaviour.

Keeping the styling in an external CSS file allows the same design rules to be applied consistently across the website.

### JavaScript

JavaScript is used to introduce client-side functionality and improve interaction with website elements.

The Part 3 development work uses JavaScript for interactive behaviour, form validation, dynamic page content and other features that improve the visitor experience.

### Leaflet and OpenStreetMap

Leaflet is a JavaScript library for creating interactive maps. It can be used with OpenStreetMap map tiles to display an interactive location map without requiring a paid Google Maps API key.

### Git and GitHub

Git is used for version control and tracking changes during development. GitHub hosts the project repository and provides a record of the development process through commits.

### Netlify

Netlify is used to host and deploy the website. It makes the website publicly accessible through its live URL and can automatically deploy updates when changes are pushed to the connected GitHub repository.

---

## 6. Project Folder Structure

The project is organised into separate folders to make the files easier to manage and maintain.

The main project structure is:

```text
GEN-TO-GEN-WEBSITE/
│
├── css/
│   └── style.css
│
├── images/
│   ├── hero.jpg
│   ├── about-community.jpg
│   ├── youth.jpg
│   ├── mentorship.jpg
│   └── soup-kitchen.jpg
│
├── js/
│   └── script.js
│
├── docs/
│   └── sitemap.md
│
├── about.html
├── contact.html
├── enquiry.html
├── index.html
├── services.html
│
└── README.md
```

Additional files may be included as the website develops, such as a confirmation page, an XML sitemap and a robots.txt file.

### Folder descriptions

**css/**  
Contains the external stylesheet responsible for the website's visual presentation and responsive layout.

**images/**  
Contains the images used throughout the website. Keeping images in a dedicated folder makes them easier to organise and reference.

**js/**  
Contains the JavaScript file responsible for client-side functionality and interactive website behaviour.

**docs/**  
Contains supporting project documentation, including the website sitemap.

**HTML files**  
Each HTML file represents a separate page of the website.

**README.md**  
Provides project documentation, including the website overview, technologies, structure, development history and references.

---

## 7. Design and Layout

The website uses a consistent visual design across its pages. The navigation, typography, colours, spacing and general layout are maintained through the shared external CSS stylesheet.

The design aims to provide a professional, accessible and straightforward experience.

### Navigation

A consistent navigation menu allows visitors to move between the Home, About Us, Services, Enquiry and Contact pages.

The navigation is displayed horizontally on larger screens and adapts to smaller screens to maintain usability.

### Typography

Typography is used to establish a clear content hierarchy. Headings distinguish sections, while paragraphs provide supporting information.

Consistent font styling and spacing improve readability.

### Colours and Decoration

The stylesheet applies consistent colours and decorative styling to create a unified appearance across the website.

Buttons, links, navigation elements and content sections use consistent styling to make the interface easier to recognise.

### Images

Images support the website's content and help communicate the foundation's community-focused activities.

Descriptive alternative text is used to make images more understandable to visitors using assistive technologies.

---

## 8. Responsive Web Design

The website uses responsive CSS techniques to adapt its layout to different screen sizes.

Responsive design is important because visitors may access the website using desktop computers, laptops, tablets and smartphones.

The stylesheet uses media queries to adjust the layout at different viewport widths.

The responsive implementation includes:

- Flexible page layouts.
- Navigation adjustments for smaller screens.
- Images that resize to fit their containers.
- Readable typography across different screen sizes.
- Appropriate spacing and alignment.
- Form elements that remain usable on smaller displays.

The main responsive breakpoints used in the stylesheet are:

- **768px:** Adjustments for tablet-sized screens.
- **480px:** Adjustments for smaller mobile screens.

These breakpoints help maintain a consistent and usable layout across devices.

---

## 9. JavaScript Functionality and Interactivity

JavaScript is used to improve the website beyond static HTML content. The purpose of the interactive functionality is to make the website easier to explore and improve the way visitors interact with its information.

The JavaScript code is organised in the external file `js/script.js`.

### Interactive accordion

An accordion allows visitors to expand and collapse sections of information.

This is useful on the Services page because it allows visitors to explore information about different programmes without having to display every explanation at once.

The accordion uses clickable buttons to control the visibility of associated content. Its expanded state should be communicated through appropriate accessibility attributes, such as `aria-expanded`.

### Service search and filtering

The service search feature allows visitors to enter a keyword and filter the displayed service information.

JavaScript reads the visitor's search input and compares it with the text contained in the service items. Items that match the search remain visible, while unrelated items are hidden.

This helps visitors locate relevant information more quickly.

### Image gallery and lightbox

The image gallery provides a more interactive way to view images associated with the foundation's activities.

When a visitor selects a gallery image, a larger version can be displayed in a lightbox. Navigation controls allow visitors to move between images, while a close control returns them to the original page.

Keyboard controls improve accessibility and make the gallery easier to use.

### Interactive location map

The location map is intended to help visitors view the foundation's Johannesburg location.

Leaflet can be used to display the map, while OpenStreetMap provides the underlying map data.

The map should use the organisation's verified location rather than an estimated or unrelated location. It should also provide a clear location marker and supporting address information.

### JavaScript and DOM manipulation

The website uses JavaScript to interact with the Document Object Model (DOM).

DOM manipulation allows the website to respond to user actions by changing the visibility, content or state of page elements without requiring a complete page reload.

This approach is used for interactive elements, search filtering and form feedback.

---

## 10. Forms and Validation

Forms are important because they allow visitors to communicate directly with the foundation.

The website separates programme-related enquiries from general contact messages so that visitors can provide information relevant to their reason for contacting the organisation.

### 10.1 Enquiry Form

The Enquiry page is intended for visitors who want information about the foundation's programmes, activities or opportunities.

The form collects information such as:

- Full name.
- Email address.
- Telephone number.
- Enquiry category.
- Details of the enquiry.

The enquiry category helps identify the visitor's area of interest. Examples include volunteering, mentorship, sponsorship, donations and programme-related questions.

JavaScript validation can be used alongside HTML form validation to check that required fields have been completed correctly.

Validation should identify missing or incorrectly formatted information and provide clear feedback so that visitors can correct their entries.

After successful validation, the enquiry information can be submitted for the organisation to review and respond to.

### 10.2 Contact Form

The Contact page provides a general communication form.

The form collects:

- Full name.
- Email address.
- Telephone number, where required.
- Subject or message type.
- Full message.

HTML validation checks required fields and basic input formats. JavaScript can provide additional validation and clear feedback when information is missing or invalid.

The completed information is intended to be submitted to the organisation through the configured form-processing service.

### 10.3 Form Processing

A static HTML website cannot independently send and store form submissions without a form-processing service or backend.

Netlify Forms can be used to process submissions when the forms are correctly configured and detected during deployment.

Email notifications must also be configured with the organisation's intended recipient address. A successful browser-side validation message does not, by itself, mean that an email has been delivered.

Form processing should therefore be tested on the deployed website to confirm that submissions are received and that the notification process works correctly.

---

## 11. Search Engine Optimisation (SEO)

Search Engine Optimisation improves the ability of search engines to understand website content and helps visitors discover relevant information.

The website's SEO approach focuses on on-page content, technical configuration, accessibility and performance.

### Page titles

Each page should have a unique and descriptive HTML title.

The title should identify the page's subject and include the organisation's name where appropriate.

### Meta descriptions

Each page should have a relevant meta description summarising its content.

Descriptions should be clear, accurate and useful to someone viewing the page in search results.

### Keywords and content

Website content should naturally include relevant terms associated with the organisation and its activities.

Examples include:

- Gen to Gen Foundation.
- Youth empowerment.
- Community development.
- Mentorship programmes.
- Philanthropy.
- Volunteering opportunities.
- Community support in South Africa.

Keywords should be included naturally in headings, page titles, descriptions and written content. Content should remain useful to visitors rather than being written simply to repeat keywords.

### Heading structure

HTML headings should follow a logical hierarchy.

The main page heading should use an appropriate H1 element, followed by H2 and H3 headings for supporting sections.

A logical heading structure makes content easier to navigate and understand.

### Image optimisation

Images should use descriptive filenames and meaningful alternative text.

Image file sizes should be kept reasonable to improve loading performance. Images that are not immediately visible can use lazy loading where appropriate.

### Internal linking

Links between related pages help visitors navigate the website and allow search engines to discover its content.

For example, the Home page can direct visitors to the Services and Enquiry pages, while the Services page can direct visitors to the Contact page.

### Mobile friendliness

The responsive layout helps visitors access the website on different devices. Mobile usability is an important part of providing a positive user experience.

### XML sitemap

An XML sitemap provides search engines with information about the website's important pages.

The sitemap should include the canonical live URLs of the website's pages.

### robots.txt

The robots.txt file provides instructions to compliant search-engine crawlers about which areas of a website they may access.

It should reference the website's XML sitemap.

### Website security and performance

The website is hosted using Netlify and is accessible through HTTPS.

Performance improvements include optimising images, avoiding unnecessary scripts and maintaining clean HTML, CSS and JavaScript files.

---

## 12. Website Sitemap

The website contains the following main pages:

```text
Home
│
├── About Us
│
├── Services
│
├── Enquiry
│
└── Contact
```

Each page is accessible through the main navigation menu.

The sitemap helps explain the organisation of the website and the relationships between its main pages.

The project also includes supporting sitemap documentation in `docs/sitemap.md`.

---

## 13. Testing and Quality Assurance

Testing is necessary to ensure that the website works correctly and provides a consistent experience.

The website should be tested locally and after deployment.

### Navigation testing

Navigation links should direct visitors to the correct pages. Links between related sections should also be checked.

### Layout testing

The website should be checked at desktop, tablet and mobile screen sizes to identify layout problems.

### Image testing

All images should load correctly. Their dimensions, display behaviour and alternative text should also be reviewed.

### JavaScript testing

Interactive features should respond correctly to user actions.

Accordion controls, service filtering, image gallery navigation and lightbox controls should be tested where implemented.

### Form testing

Forms should be tested using valid and invalid information.

Testing should include:

- Submitting a form with required fields missing.
- Entering an incorrectly formatted email address.
- Entering valid information.
- Confirming that validation messages are understandable.
- Confirming that the form submission reaches the configured processing service.
- Confirming that the organisation's notification process works.

### Map testing

The map should load correctly, display the correct location and remain usable on smaller screens.

### SEO testing

Page titles, meta descriptions, headings, image alternative text, internal links, sitemap.xml and robots.txt should be reviewed.

### Deployment testing

The live website should be opened using its Netlify URL to confirm that the deployed version reflects the latest changes.

---

## 14. Deployment and Hosting

The website is hosted on Netlify.

**Live Website:** https://cheerful-taiyaki-e4b652.netlify.app/

Netlify provides hosting for the website and makes it accessible to visitors through a public URL.

The project is maintained in a GitHub repository:

**GitHub Repository:** https://github.com/Tumi7-7/GEN-TO-GEN

The GitHub repository serves as the source-code location for the project. Changes can be committed and pushed to the repository, allowing the connected Netlify deployment to publish updates.

The website uses a static HTML, CSS and JavaScript structure and does not require a traditional server-side application to display its pages.

---

## 15. Version Control and GitHub

Git is used to manage the development process and maintain a history of changes.

GitHub provides a central repository where the website's source files and documentation are stored.

Descriptive commit messages make it easier to understand what changed during each development stage.

Examples of suitable commit messages include:

- `Create initial Gen to Gen website structure`
- `Add website pages and navigation`
- `Add responsive CSS styling`
- `Improve mobile navigation and page layouts`
- `Update project documentation`
- `Add interactive JavaScript functionality`
- `Implement form validation`
- `Integrate interactive location map`
- `Improve website SEO and metadata`
- `Update sitemap and deployment configuration`

Changes should be committed in meaningful stages rather than combining unrelated updates into one commit.

---

## 16. Development Changelog

The changelog records the development history of the Gen to Gen Foundation website. It explains the major changes made during the project and how the website developed from its initial structure into a more complete website.

### Part 1 – Initial Website Development

**Project planning and requirements**

The project began with the identification of the organisation's purpose, target audience and website objectives. The content and structure were planned around the foundation's focus on philanthropy, youth empowerment and mentorship.

**Website structure**

The initial website structure was created using separate HTML pages for the Home, About Us, Services, Enquiry and Contact sections. This established the main navigation and organisation of the website.

**HTML development**

The HTML pages were created to provide the main content and structure of the website. Headings, paragraphs, navigation links, images and other page elements were added to communicate the foundation's information.

**Images and content**

Images were added to support the website's content and make the pages more engaging. Written content was developed around the foundation's activities and its intended audience.

**Project documentation**

The project README was introduced to document the website's purpose, technologies and structure. Supporting documentation, including the sitemap, was also included in the project.

### Part 2 – CSS Styling and Responsive Design

**External stylesheet implementation**

An external stylesheet was developed and linked to the website pages. This made it possible to manage the appearance of the website from a central CSS file and maintain consistent styling.

**Default styling and typography**

CSS rules were added to establish consistent default styling, typography, spacing and content presentation.

**Page layout improvements**

The layout was improved through CSS techniques that organise the navigation, sections, content areas, images, buttons and forms.

**Navigation styling**

The navigation menu was styled to provide a consistent way for visitors to move between the website pages. Its layout was designed to display horizontally on larger screens.

**Colours and visual presentation**

Colour choices, borders, spacing and decorative elements were applied to improve the overall appearance and maintain visual consistency.

**Interactive styling**

CSS pseudo-classes were used to provide visual feedback when visitors interact with links, buttons and other relevant elements.

**Responsive design**

Media queries were introduced to adapt the website to tablet and mobile screen sizes. The layout, navigation, typography and images were adjusted to remain usable on smaller displays.

**Project documentation updates**

The README and changelog were updated to describe the styling and responsive design work completed during this stage.

### Part 3 – Functionality, Forms and Search Engine Optimisation

**JavaScript integration**

JavaScript was introduced as the foundation for additional website functionality. The external `js/script.js` file provides a central location for client-side scripts and interactive behaviour.

**Interactive website elements**

Interactive elements were developed to make the website easier to explore. These include expandable content sections and other controls that respond to visitor actions.

**Service search and filtering**

Search functionality was introduced to help visitors locate relevant programme and service information. The filtering behaviour uses JavaScript to compare search terms with the available content.

**Image gallery and lightbox**

The image gallery provides a more interactive way to view the foundation's images. A lightbox presentation allows visitors to view selected images in a larger format and navigate between them.

**Interactive map**

An interactive map was incorporated into the location information to help visitors view the foundation's Johannesburg location. Leaflet and OpenStreetMap provide the mapping functionality.

**Enquiry form improvements**

The enquiry form was developed to collect visitor information and identify the type of enquiry being submitted. HTML and JavaScript validation help ensure that required information is supplied in an appropriate format.

**Contact form improvements**

The contact form was developed to collect general messages from visitors. Validation provides feedback when required information is missing or incorrectly entered.

**Form processing**

Form processing was incorporated through the configured hosting or form-processing service so that submitted information can be received and reviewed by the organisation. Email notifications require the correct recipient configuration.

**Search engine optimisation**

SEO improvements were introduced through descriptive page titles, meta descriptions, relevant page content, heading structure and image alternative text.

**Technical SEO**

The project includes search-engine support files such as an XML sitemap and robots.txt. These files help search engines discover website pages and understand crawling instructions.

**Documentation and deployment**

The README, references and changelog were expanded to explain the website's functionality, technologies, SEO approach and deployment process.

*The changelog should be kept in line with the actual project files and deployed website. Any feature that has not yet been implemented or tested should not be represented as completed development work.*

---

## 17. Future Improvements

The website can be improved further as the foundation's needs and online activities develop.

Possible future improvements include:

- Adding a regularly updated news and events section.
- Publishing detailed information about completed community projects.
- Introducing a dedicated volunteer registration process.
- Adding a donation facility through a suitable secure payment provider.
- Providing more information about mentorship opportunities.
- Improving accessibility through further testing and refinements.
- Monitoring website performance and search visibility.
- Expanding the website's content as new programmes become available.
- Improving visitor analytics while respecting privacy requirements.

These improvements could help the foundation communicate more effectively with its audience and provide additional ways for visitors to participate.

---

## 18. References

The following resources provide technical guidance and documentation relevant to the development of the website.

1. Mozilla Developer Network (MDN). (n.d.). *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML

2. Mozilla Developer Network (MDN). (n.d.). *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS

3. Mozilla Developer Network (MDN). (n.d.). *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript

4. Mozilla Developer Network (MDN). (n.d.). *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation

5. Leaflet. (n.d.). *Leaflet – an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/

6. OpenStreetMap. (n.d.). *OpenStreetMap*. Available at: https://www.openstreetmap.org/

7. Netlify. (n.d.). *Forms setup*. Available at: https://docs.netlify.com/manage/forms/setup/

8. Google Search Central. (n.d.). *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

9. Google Search Central. (n.d.). *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

10. GitHub Docs. (n.d.). *About Git*. Available at: https://docs.github.com/en/get-started/using-git/about-git

11. Netlify. (n.d.). *Netlify documentation*. Available at: https://docs.netlify.com/

12. W3Schools. (n.d.). *HTML, CSS and JavaScript tutorials*. Available at: https://www.w3schools.com/

The references should be updated with access dates and any additional resources actually used during development, in accordance with the referencing requirements of the module.

---

## 19. Conclusion

The Gen to Gen Foundation website provides an online platform for communicating the organisation's purpose, activities and opportunities for community involvement.

The project demonstrates the use of HTML to structure website content, CSS to create a consistent and responsive design, and JavaScript to introduce interactive functionality.

The development process also considers form validation, search engine optimisation, version control, documentation and deployment.

The overall aim is to provide a clear, accessible and informative website that helps visitors learn about Gen to Gen Foundation and understand how they can support its work.

**Live Website:** https://cheerful-taiyaki-e4b652.netlify.app/

**GitHub Repository:** https://github.com/Tumi7-7/GEN-TO-GEN
