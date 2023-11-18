import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDINGPAGEDASHBOARD from "./pages/LANDINGPAGEDASHBOARD";
import EDITPROFILEMODULE from "./pages/EDITPROFILEMODULE";
import SEARCHCLASSASSIGNMENTMODULE from "./pages/SEARCHCLASSASSIGNMENTMODULE";
import GRADINGSHEETMODULEREPORTG from "./pages/GRADINGSHEETMODULEREPORTG";
import GRADINGSHEETMODULECLASS from "./pages/GRADINGSHEETMODULECLASS";
import UPDATEGRADEMODULE from "./pages/UPDATEGRADEMODULE";
import CHANGEPASSWORDMODULE from "./pages/CHANGEPASSWORDMODULE";
import GRADINGSHEETMODULE from "./pages/GRADINGSHEETMODULE";
import CLASSASSIGNMENTMODULE from "./pages/CLASSASSIGNMENTMODULE";
import PROFILEMODULE from "./pages/PROFILEMODULE";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile-module":
        title = "";
        metaDescription = "";
        break;
      case "/search-class-assignment-module":
        title = "";
        metaDescription = "";
        break;
      case "/grading-sheet-module-report-gradeprint-gradesheet":
        title = "";
        metaDescription = "";
        break;
      case "/grading-sheet-module-class":
        title = "";
        metaDescription = "";
        break;
      case "/update-grade-module":
        title = "";
        metaDescription = "";
        break;
      case "/change-password-module":
        title = "";
        metaDescription = "";
        break;
      case "/grading-sheet-module":
        title = "";
        metaDescription = "";
        break;
      case "/class-assignment-module":
        title = "";
        metaDescription = "";
        break;
      case "/profile-module":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDINGPAGEDASHBOARD />} />
      <Route path="/edit-profile-module" element={<EDITPROFILEMODULE />} />
      <Route
        path="/search-class-assignment-module"
        element={<SEARCHCLASSASSIGNMENTMODULE />}
      />
      <Route
        path="/grading-sheet-module-report-gradeprint-gradesheet"
        element={<GRADINGSHEETMODULEREPORTG />}
      />
      <Route
        path="/grading-sheet-module-class"
        element={<GRADINGSHEETMODULECLASS />}
      />
      <Route path="/update-grade-module" element={<UPDATEGRADEMODULE />} />
      <Route
        path="/change-password-module"
        element={<CHANGEPASSWORDMODULE />}
      />
      <Route path="/grading-sheet-module" element={<GRADINGSHEETMODULE />} />
      <Route
        path="/class-assignment-module"
        element={<CLASSASSIGNMENTMODULE />}
      />
      <Route path="/profile-module" element={<PROFILEMODULE />} />
    </Routes>
  );
}
export default App;
