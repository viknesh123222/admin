import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns,confirmbColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import Travel from "./components/TravelTable/Datatable"
import Lodge from "./components/Lodge Booking/Lodgetable"
import Mahal from "./components/Mahaltable/MahalTable"
import ReservedDate from "./components/Dateview/Date"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
        
              <Route path="gettravel">
              <Route
              
              
                index
                element={
                  <ProtectedRoute>
                    <List columns={confirmbColumns} />
                  </ProtectedRoute>
                }
              />
              </Route>
              <Route path="getlodge">
              <Route
              
              
                index
                element={
                  <ProtectedRoute>
                    <List columns={confirmbColumns} />
                  </ProtectedRoute>
                }
              />
              </Route>
              <Route path="getall">
              <Route
              
              
                index
                element={
                  <ProtectedRoute>
                    <List columns={confirmbColumns} />
                  </ProtectedRoute>
                }
              />
              </Route>
            
              <Route path="/Lodgetable" element={<Lodge/>}/>
             < Route path="/MahalTable" element={<Mahal/>}/>
  <Route path="/Date" element={
    <ProtectedRoute>
  <ReservedDate/>
  </ProtectedRoute>}/> 

            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
            
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
