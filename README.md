# Visualizing the Vertical Context of Geographic Locations 
### Student Name : Dambure Liyanage Prasad Madushanka Dauglas

**Research Question :**
How to effectively visualize the vertical context of Geographic locations?

**Research Objectives :**
- Derive requirements, limitations for web application that visualize the vertical context of Geographic location under three different visualization approaches
- Developing a web application that implements the selected requirements
- Evaluate the effectiveness of web application and best visualization approach through generated tasks

**Data:**
- Umweltbundesam (vertical context of environmental data)  - data access through [Air Data API (UBA) 3.0.0](https://www.umweltbundesamt.de/daten/luft/luftdaten/doc#)
- DBpedia (vertical context of places) - data collected through [DBpedia Live Sync API](https://www.dbpedia.org/resources/live/dbpedia-live-sync/)
  
**Visualization Approaches :**
- Scrolling  approach  - Data visualized through single web page and user can access data from scrolling web page top to bottom
- [Zoomable circle packing using D3.js](https://observablehq.com/@d3/zoomable-circle-packing?intent=fork)
- Spiral-type of leaflet markers using Leaflet.js - Circular shape with a spiral path that originates from its centre and by clicking the geographic location.
   
**Requirments identification for web application :**
- The app should change the different base maps with country boundaries, labels (Functional)
- The app should have a search bar with autocomplete Suggestions to search the location (Functional)
- The app should have information section to make tasks easier (Functional)
- Visualizing the attributes as categories/ groups (Functional)
- Quantity of Location markers (Geographic locations) (Functional)
  - DBpedia – 10 | UmweltBundesamt – 10 
- Number of attributes for visualisation (Functional)
  - DBpedia – 25/ 50/ 100/ 200 | UmweltBundesamt – 25/ 50/ 100/ 200 
- The app should be responsive (Non-Functional)
- The app should have standard CSS styles. Usage of Bootstrap CSS framework (Non-Functional)
- The app should be available over a website (Non-Functional)
- The app should be user-friendly and have a fast loading time. Usage of Single Page Application (SPA) Front-end framework-Vue.js (Non-Functional)

**Proposed Methodology :**
1. Data Acquiring --> Done
2. Vertical attribute selection --> Done
3. Data Cleaning
   -  UmweltBundesamt --> Done
   -  DBpedia --> Pending
4. Develop three visualization approaches --> Done
5. Data injection --> Not completed
6. Web Application​ --> Not completed
7. Validation --> Not completed
8. Final Web Application (SPA)​ --> Not completed
9. Task generation for evaluation --> Not completed
10. Evaluation & Comparison of Visualization Approaches​ --> Not completed
11. Evaluation Results --> Not completed
12. Selection of the best visualzation approach  --> Not completed

**Short video:**
[Link for short video](https://www.youtube.com/watch?v=pjFWVJ0yK7k)
   






