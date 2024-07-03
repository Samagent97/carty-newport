
import CustomTypography from "./CustomTypography";

const LINKS = ["Facebook", "X", "Linkedin", "Github"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <CustomTypography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </CustomTypography>
              </li>
            ))}
          </ul>
          <CustomTypography
            as="span"
            variant="small"
            className="font-normal text-gray-700"
          >
            © {CURRENT_YEAR}
          </CustomTypography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import CustomTypography from "./CustomTypography";

// const LINKS = ["Facebook", "X", "Linkedin", "Github"];
// const CURRENT_YEAR = new Date().getFullYear();

// export function Footer() {
//   return (
//     <footer className="mt-10 px-8 pt-20">
//       <div className="container mx-auto">
//         <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
         
//           <ul className="flex gap-8 items-center">
//             {LINKS.map((link) => (
//               <li key={link}>
//                 <CustomTypography
//                   as="a"
//                   href="#"
//                   variant="small"
//                   className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   {link}
//                 </CustomTypography>
//               </li>
//             ))}
           
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
