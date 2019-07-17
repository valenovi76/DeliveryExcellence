



# Valentina Novara - BT Ireland

User-Centric Frontend Development Milestone Project - Code Institute

### Table of Contents

-   [Demo](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Demo)
-   [Summary](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Website-summary)
-   [UX](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#UX)
-   [Testing](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Testing)
-   [Page Notes](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Page-Notes)
-   [Technologies](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Technologies)
-   [Deployment](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Deployment)
-   [Acknowledgements](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Acknowledgements)
-   [Media](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Media)

----------

## Demo

A live demo can be found [Here](https://valenovi76.github.io/DeliveryExcellence/index.html)

Here is how the site will look on different devices ![differnt devices view](https://raw.githubusercontent.com/valenovi76/DeliveryExcellence/master/assets/images/responsive_site.jpg) 

----------

## Website-summary

The site is the showcase window for a relatively new team in our company. We conducted an internal Voice of the Customer series of meetings and the findings lead us to identify the business purpose for the site. The team uses Lean Six Sigma and Continuous Improvement (CI) tools to advance productivity across the business. **The purpose of the site is to promote** **the team** **as the** **resource to engage** **when a structured, data based approach is needed to improve performance, ultimately generating more projects requests**.

Since the above mentioned tools and techniques (Lean Six Sigma and CI) can be quite complicated and cumbersome, the site had to be catchy and fun but at the same time give an idea of professionalism and clarity where the methodology is explained. It also had to offer the option to get in touch multiple times, in an effort to increase work stream.

----------

## UX

Using Customer Experience Mapping techniques, I created a “customer persona” profile, to identify the site’s audiences, their needs, demographic, expectations and so on. A typical user will be a company employee, seeking to improve the company’s productivity identifying possible issues in their work processes and workflows. They will want to understand what the Delivery Excellence team does, how they do it, the skillset they have and see  a few examples of what they achieved so far, with the option to download the projects documents. They will need to be able to contact the team easily once they have made up their mind. The demographic is quite advanced placing the website's audience in the >50 years age gap. The site will be internal, so they will expect a continuity with the company intranet “feel”. This will translate in precise guidelines in terms of branding (colour palette, position of logo etc…) and a more old-fashioned architecture with a static, linear display of the site pages. A parallax technique, however trendy, would be out place.

These are the orginal MockUps [wireframe folder](https://github.com/valenovi76/DeliveryExcellence/tree/master/assets/wireframes)

----------

## Testing

1.  User Testing

All pages functions and information was reviewed by colleagues and peers with follow up on their feedback. All the links to social media have been tested and are live and working, they also do open in a different tab to ensure the site flow is not disrupted . The link to the company Intranet does work when on company’s connection, it cannot however be open when on a generic connection, in line with company’s security policy. The Submit button, on the contact form, is not connected to any database at the moment, however, the form is built using specific input fields for specific sets of data (email for email, number for phone number and so on) and the attribute “required” ensures the correct data is gathered. An error message, alerts the users if the wrong data is entered, achieving two goals: collection of meaningful, clean data for later use and a smooth customer experience. Testing the site across the different devices I realised that the index page was not displaying correctly for IPad-Pro so I created a mediaquery to cater for that. I did the same for the About page, since the third column on the right was being moved at the bottom, instead of stacking vertically. I added a mediaquery also to take care of the portfolio page: for smaller devices the timeline and the icons (purple gears) have been set to display=none. The same has been done for the method page where the icons that are visible with an alternating pattern on the page are removed for smaller screens. All the above choices make for a neater and simpler navigation, less cluttered, when the site is opened on mobiles and tablets.
During the testing I noticed that the navbar on the About page, when rendered on smaller devices was appearing always as expanded.
After investigation I realised I had a "stray" javaquery in my java scripts folder that was creating an issue. I amended it and ensured it was called out only in the footer of the page. That took care of the issue.
There are still some vendor issues on the style of the Google Charts, on that subkect please see the section on  [Technologies](https://github.com/valenovi76/DeliveryExcellence/blob/master/README.md#Technologies).

2.  Browser Testing

The site was tested on the following browsers 

 - Google Chrome 
 - MS Internet Explorer 
 - MS Edge
 - Mozilla Firefox   
 - Safari

The site was also tested on different devices.

 - Laptop 
 - Samsung Tablet (10 inch)
 - Samsung Galaxy A3 
 - iPhone & IPad (Note the testing on IPad was limited to the inspection on Google Chrome Developer for lack of actual device).

----------

## Features

 - [Index page](https://valenovi76.github.io/DeliveryExcellence/index.html)
The page is a "cover" for the site. It has a catchy sentence to encourage further navigation and offers the option to Contact the team, clicking the Contact Us button. The button itself is kept large on smaller devices to make it easier to be clicked. It does redirect the user to the Contact Us page.

 - [About page](https://valenovi76.github.io/DeliveryExcellence/team.html) 
The page showcases the team with a brief bio about their professional skills which are further represented with a visual aid : Google graphs. The graphs are responsive on hover and show the relevant skill label and the percentages.

 - [Methodology page](https://valenovi76.github.io/DeliveryExcellence/method.html)
 The page explains in a simple and succint way what Lean Six Sigma is all about, accompanying the user throughout the 5 distinctive phases. The inspiration was taken from a [Boostrap template](https://themes.getbootstrap.com/product/sparrow-simple-seamless-alive/)

 - [Portfolio page](https://valenovi76.github.io/DeliveryExcellence/portfolio.html)
The page displays a timeline with the projects that have been completed so far. A download icon enables the download of the relevant project docs, where available.

 - [Contact page](https://valenovi76.github.io/DeliveryExcellence/contact.html)
The page gives the client a few options to get in touch with the team : physical business address, phone call (the number is in a phone format allowing a direct call to start on click) and a contact form.

----------

## Technologies

 - HTML
 - CSS
 - Bootstrap
 - Fontawesome
 - Google Font
 -  Jquery 
 - Google charts


The site uses Bootstrap and Google charts with the relevant Jqueries, to show the skill set of each team member on the About page. The Jqueries throw an error message on the W3C code validation sites, but since we haven't studied them as a course subject as of yet I did not attempt to amend them. From a UX point of view they work perfectly fine.

----------

## Future Releases

An email confirming a successful submit should be sent when a form is filled in. The site will eventually be linked to a back-end database and I would like to tie it in with a team productivity view and a dashboard to track projects requests from “book to bill”. There should be a login option for team members to control the new requests submitted by the users and to manage them.

----------

## Deployment

This site is hosted on GitHub and deployed directly from the master branch. Any commit updates or new releases will be deployed to that master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html. To run locally, you can clone this repository directly into the editor of your choice by pasting git clone [https://github.com/valenovi76/DeliveryExcellence](https://github.com/valenovi76/DeliveryExcellence) into your terminal. To unlink the site from the GitHub repository, type git remote rm origin into the terminal. The site is hosted on GitHub and can be run from there or locally by pasting the following link directly into your browser.[[https://valenovi76.github.io/DeliveryExcellence/](https://valenovi76.github.io/DeliveryExcellence/)([https://valenovi76.github.io/DeliveryExcellence/index.html](https://valenovi76.github.io/DeliveryExcellence/index.html)). To view the source code please click on the following GitHub address [https://github.com/valenovi76/DeliveryExcellence](https://github.com/valenovi76/DeliveryExcellence) Future deployment will see the page hosted on the company intranet.

----------

## Acknowledgements

British Telecommunications for the colour palette and site footer links
 [https://www.pexels.com](https://www.pexels.com/) for the Index page image.
 [www.freepik.com](http://www.freepik.com/), [www.flaticon.com](http://www.flaticon.com/), FontAwsome for the icons used across the site.
 Alan Longmore for the help on coding.
 Donall Madden for checking the text throughout the site.
