import React from 'react';
import { Gallery } from "react-grid-gallery";

const GaralyHome = () => {
    const images = [
        {
           src: "https://img.freepik.com/free-photo/toddler-boy-lying-covered-with-purple-towel_1304-4148.jpg?size=626&ext=jpg&ga=GA1.1.833240838.1684436305&semt=sph",
           width: 320,
           height: 174,
          
         //   caption: "After Rain (Jeshu John - designerspics.com)",
           
        },
        {
           src: "https://img.freepik.com/free-photo/front-view-kid-playing-with-wooden-toyds_23-2149357210.jpg?w=740&t=st=1684442621~exp=1684443221~hmac=d56c8c1c3ab27fbd64a37acdc7ff4706aaa9bef7ed547edba5ecf8669106010b",
           width: 320,
           height: 212,
           tags: [
              { value: "Ocean", title: "Ocean" },
              { value: "People", title: "People" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "https://img.freepik.com/free-photo/children-playing-with-blocks_1398-4993.jpg?size=626&ext=jpg&ga=GA1.2.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
           tags: [
              { value: "Ocean", title: "Ocean" },
              { value: "People", title: "People" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3269.jpg?size=626&ext=jpg&ga=GA1.2.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
           tags: [
              { value: "Ocean", title: "Ocean" },
              { value: "People", title: "People" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
      
        {
           src: "https://img.freepik.com/free-photo/still-life-small-decorative-objects-with-vivid-colors_23-2149732875.jpg?size=626&ext=jpg&ga=GA1.2.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
        },
        {
           src: "https://img.freepik.com/free-photo/kids-home-playing-with-toys_23-2148630637.jpg?size=626&ext=jpg&ga=GA1.1.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
        },
        {
           src: "https://img.freepik.com/free-photo/high-angle-colorful-toys-floor_23-2149311330.jpg?size=626&ext=jpg&ga=GA1.1.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
        },
        {
           src: "https://img.freepik.com/free-photo/plastic-eccano-set_1398-422.jpg?size=626&ext=jpg&ga=GA1.2.833240838.1684436305&semt=sph",
           width: 320,
           height: 212,
        },
     ];
    return (
        <div>
            <Gallery images={images} />
        </div>
    );
};

export default GaralyHome;